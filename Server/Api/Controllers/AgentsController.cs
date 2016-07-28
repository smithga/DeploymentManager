using LiteDB;
using Server.Api.Models;
using Server.Api.Services;
using System;
using System.Collections.Generic;
using System.Web.Http.Cors;

namespace Server.Api.Controllers {

    [EnableCors(origins:"*", headers:"*", methods:"*")]
    public class AgentsController: BaseController {

        public IEnumerable<Agent> Get() {
            using (var roleService = new AgentService()) {
                return roleService.GetAll();
            }
        }

        public Agent Get(Guid id) {
            using (var roleService = new AgentService()) {
                var result = roleService.GetById(id);
                CheckFor404(result);
                return result;
            }
        }

        public BsonValue Post(Agent item) {
            using (var roleService = new AgentService()) {
                return roleService.Create(item);
            }
        }

        public bool Delete(Guid id) {
            using (var roleService = new AgentService()) {
                return roleService.Delete(id);
            }
        }

    }

}
