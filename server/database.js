const Database = require("better-sqlite3");
const path = require("path");

// ایجاد یا باز کردن دیتابیس
const db = new Database(path.join(__dirname, "store.db"));

// ایجاد جدول محصولات
db.exec(`
    CREATE TABLE IF NOT EXISTS products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        price INTEGER NOT NULL,
        image TEXT,
        stock INTEGER DEFAULT 0
    )
`);

module.exports = db;