using System;
using System.Collections.Generic;
using System.Linq;
using System.ServiceProcess;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Server {
    static class Program {
        /// <summary>
        /// The main entry point for the application.
        /// </summary>
        static void Main() {
            if (Environment.UserInteractive) {
                var main = new Main();
                Thread thread = new Thread(main.Start);
                thread.Start();
                while (true) { }
            } else {
                ServiceBase[] ServicesToRun;
                ServicesToRun = new ServiceBase[]
                {
                    new ServerService()
                };
                ServiceBase.Run(ServicesToRun);
            }
        }
    }
}
