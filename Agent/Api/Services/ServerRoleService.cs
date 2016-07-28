using Agent.Api.Models;
using LiteDB;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace Agent.Api.Services {

    public class ServerRoleService: BaseService, IDisposable {

        public ServerRoleService(): base("ServerRoles") { }

        public IEnumerable<ServerRole> GetAll() {
            using (var db = new LiteDatabase(DB_NAME)) {
                return db.GetCollection<ServerRole>(TableName).FindAll().ToList();
            }
        }

        public ServerRole GetById(Guid id) {
            using (var db = new LiteDatabase(DB_NAME)) {
                return db.GetCollection<ServerRole>(TableName).FindById(id);
            }
        }

        public BsonValue Create(ServerRole item) {
            using (var db = new LiteDatabase(DB_NAME)) {
                return db.GetCollection<ServerRole>(TableName).Insert(item);
            }
        }

        public bool Delete(Guid id) {
            using (var db = new LiteDatabase(DB_NAME)) {
                return db.GetCollection<ServerRole>(TableName).Delete(e=>e.Id.Equals(id)) == 1;
            }
        }

        public bool Update(ServerRole item) {
            using (var db = new LiteDatabase(DB_NAME)) {
                return db.GetCollection<ServerRole>(TableName).Update(item);
            }
        }

        public void Dispose() {
            
        }
    }

}
