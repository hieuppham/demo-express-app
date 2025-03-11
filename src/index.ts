import express, { Express, Request, Response } from "express";

const app: Express = express();

app.get('/ping', (req: Request, res: Response) => {
    res.json({ message: 'Pong!' });
});

app.get('/whoiam', (req: Request, res: Response) => {
    res.json({ message: 'hieuppham' });
});

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => {
    console.log("======================================\n");
    console.log(`    Port: ${PORT}`);
    console.log("\n======================================");
});



