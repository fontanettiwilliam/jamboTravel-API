import { Router } from "express";

import { getCities, getWeatherByCity } from "./cityController.js";

export const cityRouter = Router();

cityRouter.get("/getCities", getCities);

cityRouter.post("/getWeather", getWeatherByCity);
