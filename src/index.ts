import express, { Express } from "express";

const app: Express = express();

app.get("/", (req, res) => {
    res.send("<h1>Home page</h1>");
});

app.get("/about", (req, res) => {
    res.send("<h1>About page</h1>");
});

app.get("/partner", (req, res) => {
    res.send(`
    <h1>HienPT</h1>
    <h1><ThaoNT/h1>
    `);
});

const PORT = process.env.PORT || 8099;

const server = app.listen(PORT, () => {
    console.log("======================================\n");
    console.log(`    Port: ${PORT}`);
    console.log("\n======================================");
});