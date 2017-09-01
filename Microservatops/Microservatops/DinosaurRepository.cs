using System;
using System.Collections.Generic;
using System.Linq;

namespace Microservatops
{
    public class DinosaurRepository
    {
        private List<Dinosaur> allDinos;
        public DinosaurRepository()
        {
            allDinos = new List<Dinosaur>
            {
            new Dinosaur{Id = 1, Name = "T-Rex", Size = "12 m", Extinction = "66 mil. years ago"},
            new Dinosaur{Id = 2, Name = "Triceratops", Size = "9m", Extinction = "66 mil. years ago"},
            new Dinosaur{Id = 3, Name = "Procompsognathus", Size = "1m", Extinction = "200 mil. years ago"}
            };
        }

        public List<Dinosaur> GetDinosaurs()
        {
            return allDinos;
        }

        public Dinosaur GetDinosaur(int id)
        {
            return allDinos.FirstOrDefault(f => f.Id == id);
        }
    }
}