using Nancy;

namespace Microservatops
{
    public class Tyrannoservice_Rest : NancyModule
    {
        private DinosaurRepository dinos;

        public Tyrannoservice_Rest()
        {
            dinos = new DinosaurRepository();

            Get["/knowndinosaurs"] = _ =>
            {
                return Response.AsJson(dinos.GetDinosaurs())
                            .WithHeader("Access-Control-Allow-Origin", "*")
                            .WithHeader("Access-Control-Allow-Methods", "POST,GET")
                            .WithHeader("Access-Control-Allow-Headers", "Accept, Origin, Content-type"); ;
            };
        }
    }
}
