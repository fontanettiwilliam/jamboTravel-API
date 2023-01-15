import axios from "axios";
import { Request, Response } from "express";

interface ICity {
  city: string;
  description: string;
  extract: string;
  thumbnail: string;
  lat: number;
  long: number;
}

// TODO - In the future, a register of cities could be created, or taken from an api that has the most visited cities
const citiesNames = [
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

export const getCities = async (_: Request, res: Response) => {
  try {
    const getFullInfoCities: ICity[] = [];

    /**
     * For each city on our list, I queried Wikipedia to create the Array
     */
    for await (const city of citiesNames) {
      const { data: getCityInfo } = await axios.get(
        `https://en.wikipedia.org/api/rest_v1/page/summary/${city}`
      );

      const { description, extract, coordinates, thumbnail } = getCityInfo;

      const formattedCity: ICity = {
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
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred while performing action" });
  }
};
