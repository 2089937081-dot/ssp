const sqlite3 = require('sqlite3').verbose(); 
const db = new sqlite3.Database('./school.db', (err) => { 
if (err) { 
console.error("Database connection error:", err.message); 
} else { 
console.log('Connected to the SQLite database.'); 
db.run(`CREATE TABLE IF NOT EXISTS students ( 
id INTEGER PRIMARY KEY AUTOINCREMENT, 
name TEXT, 
email TEXT 
)`); 
} 
}); 
module.exports = db;