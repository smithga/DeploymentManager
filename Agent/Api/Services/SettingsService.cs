using Agent.Api.Models;
using LiteDB;
using System;

namespace Agent.Api.Services {

    public class SettingsService: BaseService, IDisposable {

        public SettingsService(): base("Settings") {}

        public Settings Load() {
            using (var db = new LiteDatabase(DB_NAME)) {
                var settings = db.GetCollection<Settings>(TableName).FindOne(e => e.Id != null);
                if (settings == null) {
                    settings = new Settings() {
                        Id = Guid.NewGuid(),
                        Name = "New Agent",
                        Description = "New Agent",
                        PackagesFolder = $"{System.IO.Directory.GetCurrentDirectory()}\\Packages",
                        Server = "localhost",
                        ServerPort = "7401",
                        Roles = new System.Collections.Generic.List<string>() { "WebApi", "Pic", "Search" }
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
