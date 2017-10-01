using Nancy.Hosting.Self;
using System;

namespace TyprannoServiceRest
{
    class Program
    {
        private const string serverUri = "http://localhost:8088";

        static void Main(string[] args)
        {
            using (var host = new NancyHost(new Uri(serverUri)))
            {
                Console.WriteLine($"server running at {serverUri}");
                Console.WriteLine("Press any key to stop");
                host.Start();
                Console.ReadKey();
            }
        }
    }
}
