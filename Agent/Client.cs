using Agent.Api.Models;
using RestSharp;
using System;
using System.Net;

namespace Agent {

    public class Client {

        private Settings _settings;

        public Client(Settings settings) {
            _settings = settings;
        }

        public void ConnectToServer() {
            Log($"Connecting to server: {_settings.Server}:{_settings.ServerPort}.");
            if (string.IsNullOrEmpty(_settings.Server) || (string.IsNullOrEmpty(_settings.ServerPort))) {
                Log($"WARNING: Server name/ip and port not configured.  Please browse to {_settings.LocalUrl} and configure it.");
                return;
            }

            var client = new RestClient(_settings.ServerUrl);

            string hostName = Dns.GetHostName();
            string myIP = Dns.GetHostEntry(hostName).AddressList[0].ToString();

            var request = new RestRequest("api/agents", Method.POST);
            request.AddParameter("name", _settings.Name);
            request.AddParameter("id", _settings.Id);
            request.AddParameter("ip", myIP);
            request.AddParameter("hostName", hostName);
            request.AddParameter("port", _settings.LocalPort);
            request.AddParameter("roles", SimpleJson.SerializeObject(_settings.Roles));

            // easily add HTTP Headers
            //request.AddHeader("header", "value");

            // execute the request
            IRestResponse response = client.Execute(request);
            LogResult(response);
        }

        public void DisconnectFromServer() {
            Log($"Disconnecting from server: {_settings.Server}:{_settings.ServerPort}.");
            if (string.IsNullOrEmpty(_settings.Server) || (string.IsNullOrEmpty(_settings.ServerPort))) {
                Log($"WARNING: Server name/ip and port not configured.  Please browse to {_settings.LocalUrl} and configure it.");
                return;
            }

            var client = new RestClient(_settings.ServerUrl);
            var request = new RestRequest("api/agents", Method.DELETE);
            request.AddParameter("id", _settings.Id);
            IRestResponse response = client.Execute(request);
            LogResult(response);
        }

        private void LogResult(IRestResponse response) {
            if (response.StatusCode == HttpStatusCode.OK) {
                Log("Ok");
            } else {
                Log($"Error: {response.ErrorMessage}");
            }
        }

        private void Log(string message) {
            if (Environment.UserInteractive) {
                Console.WriteLine(message);
            }
        }

    }

}
