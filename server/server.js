const express = require("express");
const cors = require("cors");
const db = require("./database");

const app = express();

// فعال کردن ارتباط React با بک‌اند
app.use(cors());

// امکان دریافت اطلاعات JSON
app.use(express.json());

// اولین API برای دریافت محصولات
app.get("/products", (req, res) => {

    const products = db.prepare("SELECT * FROM products").all();

    res.json({
        success: true,
        products: products
    });

});

// اجرای سرور
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});