import express from "express";

import { cityRouter } from "./modules/city/cityRouter.js";

const server = express();

server.use(express.json());

server.use("/", cityRouter);

server.listen(3333, () => {
  console.log("Server launched on port 3333!🚀");
});
