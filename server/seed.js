const db = require("./database");

const products = [
    {
        name: "Nike Air Max",
        price: 2500000,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
        stock: 15
    },
    {
        name: "Wireless Headphones",
        price: 1800000,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
        stock: 20
    },
    {
        name: "Travel Backpack",
        price: 950000,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
        stock: 12
    },
    {
        name: "Classic Watch",
        price: 3200000,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
        stock: 8
    },
    {
        name: "Running Shoes",
        price: 2100000,
        image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2",
        stock: 10
    }
];

// جلوگیری از ثبت دوباره محصولات
const count = db.prepare("SELECT COUNT(*) AS total FROM products").get();

if (count.total === 0) {

    const insert = db.prepare(`
        INSERT INTO products (name, price, image, stock)
        VALUES (@name, @price, @image, @stock)
    `);

    const insertMany = db.transaction((products) => {
        for (const product of products) {
            insert.run(product);
        }
    });

    insertMany(products);

    console.log("Products added successfully!");

} else {
    console.log("Products already exist!");
}

db.close();