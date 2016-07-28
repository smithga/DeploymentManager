using System.ServiceProcess;

namespace Agent {

    public partial class AgentService : ServiceBase {

        private Main main;

        public AgentService() {
            InitializeComponent();
        }

        protected override void OnStart(string[] args) {
            main = new Main();
            main.Start();
        }

        protected override void OnStop() {
            try {
                main.Stop();
            } catch { }
        }

    }

}
