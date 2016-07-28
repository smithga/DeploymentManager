namespace Server.Api.Models {

    public class Package: BaseModel {
        public string Name { get; set; }
        public string Description { get; set; }
        public string Filename { get; set; }
    }

}
