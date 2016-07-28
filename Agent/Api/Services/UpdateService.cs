using Agent.Api.Models;
using LiteDB;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace Agent.Api.Services {

    public class UpdateService: BaseService, IDisposable {

        public UpdateService() : base("Updates") { }

        public IEnumerable<Update> GetAll() {
            using (var db = new LiteDatabase(DB_NAME)) {
                return db.GetCollection<Update>(TableName).FindAll().ToList();
            }
        }

        public Update GetById(Guid id) {
            using (var db = new LiteDatabase(DB_NAME)) {
                return db.GetCollection<Update>(TableName).FindById(id);
            }
        }

        public BsonValue Create(Update item) {
            using (var db = new LiteDatabase(DB_NAME)) {
                return db.GetCollection<Update>(TableName).Insert(item);
            }
        }

        public bool Delete(Guid id) {
            using (var db = new LiteDatabase(DB_NAME)) {
                return db.GetCollection<Update>(TableName).Delete(e => e.Id.Equals(id)) == 1;
            }
        }

        public bool Update(Update item) {
            using (var db = new LiteDatabase(DB_NAME)) {
                return db.GetCollection<Update>(TableName).Update(item);
            }
        }

        public void Dispose() {
            
        }
    }

}
