using System;

namespace Agent.Api.Models {

    public class Update: BaseModel {

        public Guid PackageId { get; set; }
        public DateTime AppliedOn { get; set; }
        public string Log { get; set; }

    }

}
