using FluentAssertions;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Collections.Generic;
namespace Microservatops.Tests
{
    [TestClass]
    public class Microservatops_Tests
    {
        [TestMethod]
        public void GetAllKnownDinosaurs()
        {
            var target = new DinosaurRepository();
            var allKnownDinos = target.GetDinosaurs();

            var expected = new List<Dinosaur>
            {
            new Dinosaur{Id = 1, Name = "T-Rex", Size = "12 m", Extinction = "66 mil. years ago"},
            new Dinosaur{Id = 2, Name = "Triceratops", Size = "9m", Extinction = "66 mil. years ago"},
            new Dinosaur{Id = 3, Name = "Procompsognathus", Size = "1m", Extinction = "200 mil. years ago"}
            };

            allKnownDinos.ShouldBeEquivalentTo(expected) ;
        }

        [TestMethod]
        public void GetASpecificDinosaur()
        {
            var target = new DinosaurRepository();
            var resultingDino = target.GetDinosaur(2);

            var expected = new Dinosaur{Id = 2, Name = "Triceratops", Size = "9m", Extinction = "66 mil. years ago"};

            resultingDino.ShouldBeEquivalentTo(expected);
        }
    }
}
