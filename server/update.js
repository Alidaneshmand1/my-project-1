const db = require("./database");

const columns = db.prepare("PRAGMA table_info(products)").all();

const hasDescription = columns.some(
    column => column.name === "description"
);

if (!hasDescription) {
    db.exec(`
        ALTER TABLE products
        ADD COLUMN description TEXT
    `);

    console.log("Description column added!");
} else {
    console.log("Description column already exists!");
}

db.close();