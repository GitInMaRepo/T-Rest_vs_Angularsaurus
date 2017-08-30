using FluentAssertions;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Collections.Generic;
using System.Linq;

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
            new Dinosaur{Name = "T-Rex"},
            new Dinosaur{Name = "Triceratops"},
            new Dinosaur{Name = "Procompsognatus"}
            };

            allKnownDinos.ShouldBeEquivalentTo(expected) ;
        }
    }
}
