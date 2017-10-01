using System;
using System.Collections.Generic;
using System.Data.SQLite;

namespace TyprannoServiceRest
{
    internal class DatabaseAdapter
    {
        public const string selectDataCommand =
@"SELECT * FROM Dinosaurs ORDER BY Id";

        public const string selectSingleDinoCommand =
@"SELECT * FROM Dinosaurs WHERE Id = ";

        public const string addADinoCommand =
@"INSERT INTO Dinosaurs (Id, Name, Size, Extinction) VALUES ({0}, '{1}', '{2}', '{3}')";

        public const string maxIdCommand =
@"SELECT MAX(Id) from Dinosaurs";

        public const string tablePath = "C:/temp/MySQLiteDB.s3db";

        internal List<Dinosaur> GetDinosaurs()
        {

            SQLiteConnection conn = new SQLiteConnection($"Data Source={tablePath}");
            conn.Open();
            try
            {
                SQLiteCommand getDinosaurs = new SQLiteCommand(conn);
                getDinosaurs.CommandText = selectDataCommand;
                var dinoReader = getDinosaurs.ExecuteReader();

                if (!dinoReader.HasRows)
                {
                    throw new Exception("All dinosaurs went extinct!");
                }
                var returnValue = new List<Dinosaur>();
                while (dinoReader.Read())
                {
                    returnValue.Add(new Dinosaur
                    {
                        Id = (int)dinoReader[0],
                        Name = (string)dinoReader[1],
                        Size = (string)dinoReader[2],
                        Extinction = (string)dinoReader[3]
                    });
                }
                dinoReader.Close();
                return returnValue;
            }
            finally
            {
                conn.Close();
            }
        }

        internal Dinosaur GetDinosaur(int id)
        {
            SQLiteConnection conn = new SQLiteConnection($"Data Source={tablePath}");
            conn.Open();
            try
            {
                SQLiteCommand getDinosaurs = new SQLiteCommand(conn);
                getDinosaurs.CommandText = selectSingleDinoCommand + id;
                var dinoReader = getDinosaurs.ExecuteReader();

                if (!dinoReader.HasRows)
                {
                    throw new Exception("All dinosaurs went extinct!");
                }
                dinoReader.Read();
                var result=  new Dinosaur
                {
                    Id = (int)dinoReader[0],
                    Name = (string)dinoReader[1],
                    Size = (string)dinoReader[2],
                    Extinction = (string)dinoReader[3]
                };
                dinoReader.Close();
                return result;
            }
            finally
            {
                conn.Close();
            }
        }

        internal void AddNewDinosaur(Dinosaur dinosaur)
        {
            SQLiteConnection conn = new SQLiteConnection($"Data Source={tablePath}");
            conn.Open();
            try
            {
                SQLiteCommand getMaxId = new SQLiteCommand(conn);
                getMaxId.CommandText = maxIdCommand;
                var reader = getMaxId.ExecuteReader();
                if (!reader.HasRows)
                {
                    throw new Exception("All dinosaurs went extinct!");
                }
                reader.Read();
                var newMaxId = Convert.ToInt64(reader[0]);
                newMaxId++;
                reader.Close();

                SQLiteCommand setADino = new SQLiteCommand(conn);
                setADino.CommandText = string.Format(addADinoCommand, newMaxId, dinosaur.Name, dinosaur.Size, dinosaur.Extinction);
                setADino.ExecuteNonQuery();
            }
            finally
            {
                conn.Close();
            }
        }
    }
}