using System.Collections.Generic;

namespace Agent.Api.Models {

    public class PackageFile {
        public string Filename { get; set; }
        public List<string> TargetRoles { get; set; }
    }

}
