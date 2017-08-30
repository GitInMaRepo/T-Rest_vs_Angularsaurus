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
                return Response.AsJson(dinos.GetDinosaurs());
            };
        }
    }
}
