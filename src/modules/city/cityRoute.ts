import { Router } from "express";

import { getCities } from "./cityController.js";

export const cityRouter = Router();

cityRouter.get("/getCities", getCities);
