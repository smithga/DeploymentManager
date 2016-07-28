using Agent.Api.Models;
using Agent.Api.Services;
using LiteDB;
using System;
using System.Collections.Generic;

namespace Agent.Api.Controllers {

    public class ServerRolesController: BaseController {

        public IEnumerable<ServerRole> Get() {
            using (var roleService = new ServerRoleService()) {
                return roleService.GetAll();
            }
        }

        public ServerRole Get(Guid id) {
            using (var roleService = new ServerRoleService()) {
                var result = roleService.GetById(id);
                CheckFor404(result);
                return result;
            }
        }

        public BsonValue Post(ServerRole item) {
            using (var roleService = new ServerRoleService()) {
                return roleService.Create(item);
            }
        }

        public bool Delete(Guid id) {
            using (var roleService = new ServerRoleService()) {
                return roleService.Delete(id);
            }
        }

        public bool Put(ServerRole item) {
            using (var roleService = new ServerRoleService()) {
                return roleService.Update(item);
            }
        }

    }

}
