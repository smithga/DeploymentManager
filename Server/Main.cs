using Microsoft.Owin.Hosting;
using Server.Api;
using System;
using System.Configuration;
using System.IO;

namespace Server {

    public class Main {
        private Configuration rootWebConfig;
        public string baseAddress = "http://localhost:";
        private IDisposable _server;

        public void Start() {
            Log("Use Ctrl+C to cancel.");
            rootWebConfig = ConfigurationManager.OpenExeConfiguration(Path.Combine(Environment.CurrentDirectory, Environment.GetCommandLineArgs()[0]));
            var port = rootWebConfig.AppSettings.Settings["port"].Value;
            _server = WebApp.Start<Startup>($"{baseAddress}{port}/");
            Log($"Listening on port {port}");
        }

        public void Stop() {
            if (_server != null) {
                _server.Dispose();
            }
        }

        private void Log(string message) {
            if (Environment.UserInteractive) {
                Console.WriteLine(message);
            }
        }
    }

}
