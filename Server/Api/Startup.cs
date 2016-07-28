using Microsoft.Owin.FileSystems;
using Microsoft.Owin.StaticFiles;
using Owin;
using System.Web.Http;
using System.Web.Http.Cors;

namespace Server.Api {

    class Startup {
        public void Configuration(IAppBuilder appBuilder) {

            //This sets up our routing for the hosted web api
            //log4net.Config.XmlConfigurator.Configure();
            var config = new HttpConfiguration();
            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new {
                    id = RouteParameter.Optional
                }
            );

            appBuilder.UseWebApi(config);

            //This sets up our static file web server to serve up the web admin app.  
            //In this case we'll add all the files as embedded resources and serve them from there

            //If you wanted to serve them from a folder use the PhysicalFileSystem below
            //const string rootFolder = "./App";
            //var fileSystem = new PhysicalFileSystem(rootFolder);
            var options = new FileServerOptions {
                EnableDefaultFiles = true,
                FileSystem = new PhysicalFileSystem("./App")
                //FileSystem = new EmbeddedResourceFileSystem(typeof(ServerService).Assembly, "Server.App")
            };

            appBuilder.UseFileServer(options);

            config.Formatters.JsonFormatter.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;

            config.EnableCors(new EnableCorsAttribute("*", "*", "GET, POST, OPTIONS, PUT, DELETE"));
            //var cors = new EnableCorsAttribute("*", "*", "*");
            //config.EnableCors(cors);

        }

    }

}
