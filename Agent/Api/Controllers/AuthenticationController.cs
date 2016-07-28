using System.Web.Http;

namespace Agent.Api.Controllers {

    public class AuthenticationController: BaseController {

        //[HttpPost]
        public string Post(string username, string password) {
            Log("Authentication-Post");
            return "post";
        }

        public string Get() {
            Log("Authentication-Get");
            return "get";
        }

        public string Delete() {
            Log("Authentication-Delete");
            return "delete";
        }

        public string Put() {
            Log("Authentication-Put");
            return "put";
        }

    }

}
