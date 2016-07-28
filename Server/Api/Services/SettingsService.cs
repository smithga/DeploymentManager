using LiteDB;
using Server.Api.Models;
using System;

namespace Server.Api.Services {
    public class SettingsService : BaseService, IDisposable {
        public SettingsService() : base("Settings") { }

        public Settings Load() {
            using (var db = new LiteDatabase(DB_NAME)) {
                var settings = db.GetCollection<Settings>(TableName).FindOne(e => e.Id != null);
                if (settings == null) {
                    settings = new Settings() {
                        Id = Guid.NewGuid(),
                        Name = "New Server",
                        Description = "New Server",
                        PackagesFolder = $"{System.IO.Directory.GetCurrentDirectory()}\\Packages"
                    };
                    Save(settings);
                }
                return settings;
            }
        }

        public void Save(Settings settings) {
            using (var db = new LiteDatabase(DB_NAME)) {
                if (!db.GetCollection<Settings>(TableName).Update(settings)) {
                    db.GetCollection<Settings>(TableName).Insert(settings);
                }
            }
        }

        public void Dispose() {

        }

    }

}
