using System;
using System.Collections.Generic;

namespace Agent.Api.Models {

    /*
        //Manifest File (located inside zip file)
        {
	        Id: "D37792A8-9FB8-47B5-84DB-5F954ABB89D6",
	        name: "Patch 4.1",
	        description: "This is a test patch!",
	        targetRoles: ["role1","role2"],
	        files: [
		        { fileName: "path1/filename", targetRoles: ["role1","role2"] },
		        { fileName: "path2/filename2", targetRoles: ["role1"] },
	        ],
	        preApplyTasks: [{roleType: "role1", script: "task script"}, {roleType: "role2", script:"task script"}],
	        postApplyTasks: [{roleType: "role1", script: "task script"}, {roleType: "role2", script: "task script"}]	
        }
    */

    public class Package: BaseModel {
        //public Guid PackageId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public DateTime ReceivedOn { get; set; }
        public List<string> TargetRoles { get; set; }
        public List<PackageFile> Files { get; set; }
        public List<ApplyTask> PreApplyTasks { get; set; }
        public List<ApplyTask> PostApplyTasks { get; set; }
        public string Filename { get; set; }
    }

}
