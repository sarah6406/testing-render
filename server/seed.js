import Database from "better-sqlite3";
const db = new Database("database.db"); // either creates a database or gets the existing one

// create games table
db.exec(`
    CREATE TABLE IF NOT EXISTS games (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        year INTEGER,
        imgUrl TEXT
    )
`);
//populate the games tables
const insertGame = db.prepare(`
    INSERT INTO games (name, year, imgUrl) VALUES (?,?,?)
`);

insertGame.run("", 2000, "");
