using Agent.Api;
using Agent.Api.Models;
using Agent.Api.Services;
using Microsoft.Owin.Hosting;
using System;
using System.Configuration;
using System.IO;

namespace Agent {

    public class Main {

        private Configuration rootWebConfig;
        public string baseAddress = "http://localhost:";
        private string webAppUrl;
        private IDisposable _server;

        private Settings _settings;
        private Client _client;

        public void Start() {
            Log("Use Ctrl+C to cancel.");
            LoadSettings();
            rootWebConfig = ConfigurationManager.OpenExeConfiguration(Path.Combine(Environment.CurrentDirectory, Environment.GetCommandLineArgs()[0]));
            var port = rootWebConfig.AppSettings.Settings["port"].Value;
            _settings.LocalPort = port;
            webAppUrl = $"{baseAddress}{port}/";
            _settings.LocalUrl = webAppUrl;
            _server = WebApp.Start<Startup>(webAppUrl);
            Log($"Listening on port {port}");

            _client = new Client(_settings);
            ConnectToServer();
        }

        public void Stop() {
            if (_server != null) {
                _server.Dispose();
            }
            DisconnectFromServer();
        }

        private void LoadSettings() {
            var settingsService = new SettingsService();
            _settings = settingsService.Load();
        }

        private void Log(string message) {
            if (Environment.UserInteractive) {
                Console.WriteLine(message);
            }
        }

        private void ConnectToServer() {
            _client.ConnectToServer();
        }

        private void DisconnectFromServer() {
            _client.DisconnectFromServer();
        }

    }

}
