using Agent.Api.Models;
using Agent.Api.Services;
using LiteDB;
using System;
using System.Collections.Generic;

namespace Agent.Api.Controllers {

    public class UpdatesController: BaseController {

        public IEnumerable<Update> Get() {
            using (var svc = new UpdateService()) {
                return svc.GetAll();
            }
        }

        public Update Get(Guid id) {
            using (var svc = new UpdateService()) {
                var result = svc.GetById(id);
                CheckFor404(result);
                return result;
            }
        }

        public BsonValue Post(Update item) {
            //This causes the package to be applied!
            using (var svc = new UpdateService()) {
                return svc.Create(item);
            }
        }

        public bool Delete(Guid id) {
            using (var svc = new UpdateService()) {
                return svc.Delete(id);
            }
        }

    }

}
