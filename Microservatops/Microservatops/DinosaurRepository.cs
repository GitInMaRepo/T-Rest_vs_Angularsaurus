using System.Collections.Generic;
using System.Linq;

namespace Microservatops
{
    public class DinosaurRepository
    {
        private DatabaseAdapter Adaptoraptor = new DatabaseAdapter();

        public List<Dinosaur> GetDinosaurs()
        {
            return Adaptoraptor.GetDinosaurs();
        }

        public Dinosaur GetDinosaur(int id)
        {
            return Adaptoraptor.GetDinosaur(id);
        }

        public void AddNewDinosaur(Dinosaur dinosaur)
        {
            Adaptoraptor.AddNewDinosaur(dinosaur);
        }
    }
}