using Server.Api.Models;
using Server.Api.Services;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace Server.Api.Controllers {

    [EnableCors(origins:"*", headers:"*", methods:"*")]
    public class SettingsController: BaseController {

        public Settings Get() {
            using (var settingsService = new SettingsService()) {
                return settingsService.Load();
            }
        }

        public IHttpActionResult Post(Settings item) {
            using (var settingsService = new SettingsService()) {
                settingsService.Save(item);
            }
            return Ok();
        }

    }

}
