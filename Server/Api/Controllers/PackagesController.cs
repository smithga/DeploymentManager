using LiteDB;
using Server.Api.Models;
using Server.Api.Services;
using System;
using System.Collections.Generic;
using System.Web.Http.Cors;

namespace Server.Api.Controllers {

    [EnableCors(origins:"*", headers:"*", methods:"GET,POST,PUT,DELETE")]
    public class PackagesController: BaseController {

        public IEnumerable<Package> Get() {
            using (var svc = new PackageService()) {
                return svc.GetAll();
            }
        }

        public Package Get(Guid id) {
            using (var svc= new PackageService()) {
                var result = svc.GetById(id);
                CheckFor404(result);
                return result;
            }
        }

        public BsonValue Post(Package item) {
            using (var svc = new PackageService()) {
                return svc.Create(item);
            }
        }

        public bool Delete(Guid id) {
            using (var svc = new PackageService()) {
                return svc.Delete(id);
            }
        }

    }

}
