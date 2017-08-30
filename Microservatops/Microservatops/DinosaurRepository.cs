using System;
using System.Collections.Generic;

namespace Microservatops
{
    public class DinosaurRepository
    {
        private List<Dinosaur> allDinos;
        public DinosaurRepository()
        {
            allDinos = new List<Dinosaur>
            {
            new Dinosaur{Name = "T-Rex"},
            new Dinosaur{Name = "Triceratops"},
            new Dinosaur{Name = "Procompsognatus"}
            };
        }

        public List<Dinosaur> GetDinosaurs()
        {
            return allDinos;
        }
    }
}