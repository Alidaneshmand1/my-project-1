const db = require("./database");

const descriptions = [
    {
        id: 1,
        description: "Nike Air Max sneakers with a modern design, perfect for everyday use."
    },
    {
        id: 2,
        description: "Wireless headphones with high-quality sound and a comfortable design."
    },
    {
        id: 3,
        description: "A spacious travel backpack, perfect for trips and daily use."
    },
    {
        id: 4,
        description: "A classic watch with an elegant design, suitable for everyday wear."
    },
    {
        id: 5,
        description: "Comfortable running shoes designed for sports and daily activities."
    }
];

const update = db.prepare(`
    UPDATE products
    SET description = @description
    WHERE id = @id
`);

const updateMany = db.transaction((items) => {
    for (const item of items) {
        update.run(item);
    }
});

updateMany(descriptions);

console.log("Descriptions updated successfully!");

db.close();