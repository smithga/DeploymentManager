using Agent.Api.Models;
using Agent.Api.Services;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.IO.Compression;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace Agent.Api.Controllers {

    public class PackagesController: BaseController {

        //Packages are sent as a zip file which contains files and a manifest file.  The manifest file contains all the data
        //needed for the package object.
        public IEnumerable<Package> Get() {
            using (var svc = new PackageService()) {
                return svc.GetAll();
            }
        }

        public Package Get(Guid id) {
            using (var svc = new PackageService()) {
                var result = svc.GetById(id);
                CheckFor404(result);
                return result;
            }
        }

        public async Task<HttpResponseMessage> Post() {
            // Check if the request contains multipart/form-data.
            if (!Request.Content.IsMimeMultipartContent()) {
                throw new HttpResponseException(HttpStatusCode.UnsupportedMediaType);
            }

            var root = "";
            using (var svc = new SettingsService()) {
                var settings = svc.Load();
                root = settings.PackagesFolder;
            }
            var provider = new MultipartFormDataStreamProvider(root);
            if (!Directory.Exists(root)) {
                Directory.CreateDirectory(root);
            }

            try {
                // Read the form data.
                await Request.Content.ReadAsMultipartAsync(provider);

                // This illustrates how to get the file names.
                foreach (MultipartFileData file in provider.FileData) {
                    Log($"Package-Post: {file.Headers.ContentDisposition.FileName}");
                    Log($"Package-Post: {file.LocalFileName}");
                }
                //Open the zip file and inspect the manifest!
                var package = LoadManifest(provider.FileData[0].LocalFileName);
                using (var svc = new PackageService()) {
                    svc.Create(package);
                }
                return Request.CreateResponse(HttpStatusCode.OK);
            } catch (System.Exception e) {
                Log(e.Message);
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, "Invalid Manifest File: " + e);
            }
        }
       
        public bool Delete(Guid id) {
            using (var svc = new PackageService()) {
                return svc.Delete(id);
            }
        }

        private Package LoadManifest(string file) {
            using (ZipArchive archive = ZipFile.OpenRead(file)) {
                foreach (ZipArchiveEntry entry in archive.Entries) {
                    if (entry.FullName.EndsWith(".manifest")) {
                        var stream = entry.Open();
                        var package = DeserializeFromStream(stream);
                        package.Filename = file;
                        return package;
                    }

                }
            }
            return null;
        }

        private Package DeserializeFromStream(Stream stream) {
            var serializer = new JsonSerializer();

            using (var sr = new StreamReader(stream))
            using (var jsonTextReader = new JsonTextReader(sr)) {
                return serializer.Deserialize<Package>(jsonTextReader);
            }
        }

    }

}
