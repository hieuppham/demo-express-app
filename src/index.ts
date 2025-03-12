import express, { Express, Request, Response } from "express";
import 'dotenv/config'
import winston from "winston";
import LokiTransport from "winston-loki";

const logger = winston.createLogger({
    transports: [
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.timestamp({format: "YYYY-MM-DD HH:mm:ss"}),
                winston.format.colorize({level: true, all: true})
            )
        }),
        new LokiTransport({
            host: process.env.LOKI_HOST!,
            basicAuth: process.env.LOCKI_AUTH,
            labels: {job: process.env.LOKI_LABEL},
            onConnectionError: (error) => console.error(error)
        })
    ]
});
const app: Express = express();

app.get('/', (req: Request, res: Response) => {
    res.json({ message: 'OK' });
});


app.get('/favicon.ico', (req: Request, res: Response) => {
    res.status(200).sendFile("public/favicon.png", { root: "." });
});

app.get('/ping', (req: Request, res: Response) => {
    logger.info("Received ping request 🏓🏓🏓🏓🏓🏓🏓🏓");
    res.json({ message: 'Pong 🏓🏓🏓🏓🏓🏓🏓🏓🏓🏓🏓🏓🏓🏓' });
});

app.get('/whoiam', (req: Request, res: Response) => {
    logger.info("Received whoiam request 😎😎😎😎😎😎😎😎😎😎😎😎");
    res.json({ message: '😎😎😎😎😎😎😎😎' });
});

app.get('/check', (req: Request, res: Response) => {
    logger.info("Received check 👍👍👍👍");
    res.json({ message: 'ok 👍👍👍👍👍👍' });
});

const PORT = process.env.PORT;

const server = app.listen(PORT, () => {
    console.log("======================================\n");
    console.log(`    Port: ${PORT}`);
    console.log("\n======================================");
});



