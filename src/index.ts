import express, { Express, Request, Response } from "express";
const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.json({ foo: "bar", count: 3 });
});

app.get("/foo", (req, res) => res.send("bar"));

app.listen(3007, () => console.log("Server OK!"));
