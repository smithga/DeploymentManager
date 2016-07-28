using Agent.Api.Models;
using Agent.Api.Services;
using System.Web.Http;

namespace Agent.Api.Controllers {

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
