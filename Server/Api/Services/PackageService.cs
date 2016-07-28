using LiteDB;
using Server.Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Server.Api.Services {

    public class PackageService : BaseService, IDisposable {

        public PackageService() : base("Packages") { }

        public IEnumerable<Package> GetAll() {
            using (var db = new LiteDatabase(DB_NAME)) {
                return db.GetCollection<Package>(TableName).FindAll().ToList();
            }
        }

        public Package GetById(Guid id) {
            using (var db = new LiteDatabase(DB_NAME)) {
                return db.GetCollection<Package>(TableName).FindById(id);
            }
        }

        public BsonValue Create(Package item) {
            using (var db = new LiteDatabase(DB_NAME)) {
                return db.GetCollection<Package>(TableName).Insert(item);
            }
        }

        public bool Delete(Guid id) {
            using (var db = new LiteDatabase(DB_NAME)) {
                return db.GetCollection<Package>(TableName).Delete(e => e.Id.Equals(id)) == 1;
            }
        }

        public bool Package(Package item) {
            using (var db = new LiteDatabase(DB_NAME)) {
                return db.GetCollection<Package>(TableName).Update(item);
            }
        }

        public void Dispose() {

        }
    }

}
