using System;
using System.Net;
using System.Web.Http;

namespace Server.Api.Controllers {

    public class BaseController: ApiController {

        protected void Log(string message) {
            if (Environment.UserInteractive) {
                Console.WriteLine(message);
            } else {
                //Log to a file or event viewer!
            }
        }

        protected void CheckFor404(Object result) {
            if (result == null) {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }
        }

    }

}
