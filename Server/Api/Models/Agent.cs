using System.Collections.Generic;

namespace Server.Api.Models {

    public class Agent: BaseModel {
        public string Name { get; set; }
        public string Port { get; set; }
        public string Ip { get; set; }
        public string HostName { get; set; }
        public List<string> Roles { get; set; }
    }

}
