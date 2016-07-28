using System;
using System.ServiceProcess;
using System.Threading;

namespace Agent {

    public static class Program {

        private static Main main;

        /// <summary>
        /// The main entry point for the application.
        /// </summary>
        static void Main(string[] args) {
            if (Environment.UserInteractive) {
                main = new Main();
                Thread thread = new Thread(main.Start);
                thread.Start();
                Console.CancelKeyPress += new ConsoleCancelEventHandler(myHandler);
                while (true) { }
            } else {
                ServiceBase[] ServicesToRun;
                ServicesToRun = new ServiceBase[]
                {
                    new AgentService()
                };
                ServiceBase.Run(ServicesToRun);
            }
        }

        private static void myHandler(object sender, ConsoleCancelEventArgs e) {
            main.Stop();
        }
    }

}
