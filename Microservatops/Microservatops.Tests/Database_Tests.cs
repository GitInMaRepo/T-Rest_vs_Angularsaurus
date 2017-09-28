using FluentAssertions;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Data.SQLite;
using System.IO;

namespace Microservatops.Tests
{
    [TestClass]
    public class Database_Tests
    {
        public const string tableCreationCommand =
@"CREATE TABLE Dinosaurs (
    Id int
    , Name varchar(255)
    , Size varchar(255)
    , Extinction varchar(255))";

        public const string readTableCommand =
@"SELECT sql
    FROM sqlite_master
    WHERE tbl_name = 'Dinosaurs' 
    AND type = 'table'";

        public const string addDataCommand =
@"INSERT INTO Dinosaurs (
    Id
    , Name
    , Size
    , Extinction)
    VALUES 
    (1, 'T-Rex', '12m', '66 mil.years ago')
    , (2, 'Triceratops', '9m', '66 mil.years ago')
    , (1, 'Procompsognathus', '1m', '200 mil.years ago')";

        public const string selectDataCommand =
@"SELECT * FROM Dinosaurs";

        public const string tablePath = "C:/temp/MySQLiteDB.s3db";

        [TestMethod]
        public void CreateDatabase()
        {
            File.Delete(tablePath);

            SQLiteConnection conn = new SQLiteConnection($"Data Source={tablePath}");
            conn.Open();

            SQLiteCommand create = new SQLiteCommand(conn);
            create.CommandText =  tableCreationCommand;
            create.ExecuteNonQuery();

            SQLiteCommand assert = new SQLiteCommand(conn);
            assert.CommandText = readTableCommand;
            var assertReader = assert.ExecuteReader();
            if (!assertReader.HasRows)
            {
                Assert.Fail("Table not found");
            }

            while (assertReader.Read())
            {
                assertReader[0].Should().Be(tableCreationCommand);
            }
        }

        [TestMethod]
        public void AddDefaultValuesToDatabase()
        {
            SQLiteConnection conn = new SQLiteConnection($"Data Source={tablePath}");
            conn.Open();

            SQLiteCommand addDefaultData = new SQLiteCommand(conn);
            addDefaultData.CommandText = addDataCommand;
            addDefaultData.ExecuteNonQuery();

            SQLiteCommand assertDefaultData = new SQLiteCommand(conn);
            assertDefaultData.CommandText = selectDataCommand;
            var dinoReader = assertDefaultData.ExecuteReader();

            var expected = new string[3]
            {
                "T-Rex",
                "Triceratops",
                "Procompsognathus"
            };
            if (!dinoReader.HasRows)
            {
                Assert.Fail("Table not found");
            }

            var currentExpectedIndex = 0;
            while (dinoReader.Read())
            {
                dinoReader[1].Should().Be(expected[currentExpectedIndex]);
                currentExpectedIndex++;
            }
        }
    }
}
