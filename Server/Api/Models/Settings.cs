namespace Server.Api.Models {

    public class Settings: BaseModel {
        public string Name { get; set; }
        public string Description { get; set; }
        public string PackagesFolder { get; set; }
    }

}
