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
            new Dinosaur{Name = "T-Rex", Size = "12 m", Extinction = "66 mil. years ago"},
            new Dinosaur{Name = "Triceratops", Size = "9m", Extinction = "66 mil. years ago"},
            new Dinosaur{Name = "Procompsognathus", Size = "1m", Extinction = "200 mil. years ago"}
            };
        }

        public List<Dinosaur> GetDinosaurs()
        {
            return allDinos;
        }

        public Dinosaur GetDinosaur(int index)
        {
            return allDinos[index];
        }
    }
}