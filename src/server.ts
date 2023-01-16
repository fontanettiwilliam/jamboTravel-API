import cors from "cors";
import * as dotenv from "dotenv";
import express from "express";

import { cityRouter } from "./modules/city/cityRouter.js";

dotenv.config();

const server = express();

server.options(
  "*",
  cors({
    origin: "https://jambo-travel.vercel.app/",
    optionsSuccessStatus: 200,
  })
);

server.use(
  cors({
    origin: "https://jambo-travel.vercel.app/",
    optionsSuccessStatus: 200,
  })
);

server.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://jambo-travel.vercel.app/"
  );

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

server.use(express.json());

server.use("/", cityRouter);

server.listen(3333, () => {
  console.log("Server launched on port 3333!🚀");
});
