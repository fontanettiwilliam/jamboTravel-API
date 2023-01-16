import cors from "cors";
import * as dotenv from "dotenv";
import express from "express";
import { cityRouter } from "./modules/city/cityRouter.js";
dotenv.config();
const server = express();
server.options("*", cors({ origin: process.env.WEB_URL, optionsSuccessStatus: 200 }));
server.use(cors({ origin: process.env.WEB_URL, optionsSuccessStatus: 200 }));
server.use(express.json());
server.use("/", cityRouter);
server.listen(3333, () => {
    console.log("Server launched on port 3333!🚀");
});
