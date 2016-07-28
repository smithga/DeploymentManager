using System;
using System.Collections.Generic;

namespace Agent.Api.Models {

    public class Settings: BaseModel {

        public string Name { get; set; }
        public string Description { get; set; }
        public string Server { get; set; }
        public string ServerPort { get; set; }
        public string PackagesFolder { get; set; }
        public string LocalPort { get; set; }
        public string LocalUrl { get; set; }
        public List<string> Roles { get; set; }
        public string ServerUrl {  get { return $"http://{Server}:{ServerPort}"; } }

    }

}
