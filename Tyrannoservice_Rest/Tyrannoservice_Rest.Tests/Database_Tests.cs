using FluentAssertions;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Data.SQLite;
using System.IO;

namespace TyprannoServiceRest.Tests
{
    public static class Database_Tests
    {
        public const string tableCreationCommand =
@"CREATE TABLE Dinosaurs (
    Id int
    , Name varchar(255)
    , Size varchar(255)
    , Extinction varchar(255))";

        public const string findTableCommand =
@"SELECT name 
    FROM sqlite_master 
    WHERE type='table' 
    AND name='Dinosaurs'";

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
    (1, 'T-Rex', '12m', '66 mil. years ago')
    , (2, 'Triceratops', '9m', '66 mil. years ago')
    , (3, 'Procompsognathus', '1m', '200 mil. years ago')";

        public const string selectDataCommand =
@"SELECT * FROM Dinosaurs";

        public const string deleteRowsCommand =
@"DELETE FROM Dinosaurs";

        public const string tablePath = "C:/temp/MySQLiteDB.s3db";

        public static void DatabaseBuildup_CreateTheDinoTable()
        {
            SQLiteConnection conn = new SQLiteConnection($"Data Source={tablePath}");
            conn.Open();

            SQLiteCommand find = new SQLiteCommand(conn);
            find.CommandText = findTableCommand;
            var foundTable = find.ExecuteReader();
            if(!foundTable.HasRows)
            {
                SQLiteCommand create = new SQLiteCommand(conn);
                create.CommandText = tableCreationCommand;
                create.ExecuteNonQuery();
            }
            foundTable.Close();
            
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
            assertReader.Close();
        }

        public static void DatabaseBuildup_FillDinosaurTableWithDefaultValues()
        {
            SQLiteConnection conn = new SQLiteConnection($"Data Source={tablePath}");
            conn.Open();

            SQLiteCommand removeOldData = new SQLiteCommand(conn);
            removeOldData.CommandText = deleteRowsCommand;
            removeOldData.ExecuteNonQuery();

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
            dinoReader.Close();
        }
    }
}
