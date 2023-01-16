import axios from "axios";
import { getDay } from "date-fns";
import { formatDate } from "../../utils/formatDate.js";
import { getWeekDay } from "../../utils/getWeekDay.js";
// TODO - In the future, a register of cities could be created, or taken from an api that has the most visited cities
const citiesNames = [
    "Calgary",
    "Dubai",
    "London",
    "Cancún",
    "Cabo San Lucas",
    "Bali",
    "Crete",
    "Rome",
    "Istanbul",
    "Paris",
    "Hurghada",
];
export const getCities = async (_, res) => {
    try {
        const getFullInfoCities = [];
        /**
         * For each city on our list, I queried Wikipedia to create the Array
         */
        for await (const city of citiesNames) {
            const { data: getCityInfo } = await axios.get(`https://en.wikipedia.org/api/rest_v1/page/summary/${city}`);
            const { description, extract, coordinates, thumbnail } = getCityInfo;
            const formattedCity = {
                city,
                description,
                extract,
                lat: coordinates.lat,
                long: coordinates.lon,
                thumbnail: thumbnail.source,
            };
            getFullInfoCities.push(formattedCity);
        }
        res.json({ cities: getFullInfoCities });
    }
    catch (error) {
        res
            .status(500)
            .json({ message: "An error occurred while performing action" });
    }
};
export const getWeatherByCity = async (req, res) => {
    try {
        const { lat, long } = req.body;
        /**
         * With the Lat and Long received, a request is made to the WeatherAPI
         */
        const { data: currentWeatherData } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${process.env.OPEN_WEATHER_API_KEY}&units=metric`);
        if (!currentWeatherData) {
            throw new Error("ForecastNotFound");
        }
        const { main: currentForecastInfo, weather: currentWeatherInfo } = currentWeatherData;
        const { data: getForecastWeather } = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${process.env.OPEN_WEATHER_API_KEY}&units=metric`);
        const { list } = getForecastWeather;
        /**
         * I get the current date and filter the list to avoid the current day
         */
        const currentDate = formatDate(new Date().toString());
        /**
         * Then, I create a filter for the list taking the other days for noon
         */
        const getMiddayForecastNextDays = list.filter((forecast) => forecast.dt_txt.includes("12:00") &&
            formatDate(forecast.dt_txt) !== currentDate);
        /**
         * Format in the object FrontEnd is waiting for
         */
        const forecastNextDays = getMiddayForecastNextDays.map((forecast) => ({
            date: forecast.dt_txt,
            feelsLike: forecast.main.feels_like,
            max: forecast.main.temp_max,
            min: forecast.main.temp_min,
            temp: forecast.main.temp,
            weather: forecast.weather[0].main,
            weekDay: getWeekDay(getDay(new Date(forecast.dt_txt))),
        }));
        /**
         * And then create the response
         */
        const response = {
            current: {
                feelsLike: currentForecastInfo.feels_like,
                max: currentForecastInfo.temp_max,
                min: currentForecastInfo.temp_min,
                temp: currentForecastInfo.temp,
                weather: currentWeatherInfo[0].main,
            },
            nextDays: forecastNextDays,
        };
        res.json(response);
    }
    catch (error) {
        res
            .status(500)
            .json({ message: "An error occurred while performing action" });
    }
};
