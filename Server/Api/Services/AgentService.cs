using LiteDB;
using Server.Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Server.Api.Services {

    public class AgentService : BaseService, IDisposable {

        public AgentService() : base("Agents") { }

        public IEnumerable<Agent> GetAll() {
            using (var db = new LiteDatabase(DB_NAME)) {
                return db.GetCollection<Agent>(TableName).FindAll().ToList();
            }
        }

        public Agent GetById(Guid id) {
            using (var db = new LiteDatabase(DB_NAME)) {
                return db.GetCollection<Agent>(TableName).FindById(id);
            }
        }

        public BsonValue Create(Agent item) {
            using (var db = new LiteDatabase(DB_NAME)) {
                return db.GetCollection<Agent>(TableName).Insert(item);
            }
        }

        public bool Delete(Guid id) {
            using (var db = new LiteDatabase(DB_NAME)) {
                return db.GetCollection<Agent>(TableName).Delete(e => e.Id.Equals(id)) == 1;
            }
        }

        public bool Agent(Agent item) {
            using (var db = new LiteDatabase(DB_NAME)) {
                return db.GetCollection<Agent>(TableName).Update(item);
            }
        }

        public void Dispose() {

        }
    }

}
