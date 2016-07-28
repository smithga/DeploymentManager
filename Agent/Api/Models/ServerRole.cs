namespace Agent.Api.Models {

    public class ServerRole: BaseModel {
        public string RoleType { get; set; }
        public string RootFileLocation { get; set; }
    }

}
