import axios from "axios";
import { cache } from "react";

const API_KEY = process.env.OPENWEATHERMAP_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export const getForecast = cache(async (city: string) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: city,
        units: "metric",
        appid: API_KEY,
        lang: "en",
      },
    });

    return response.data;
  } catch (error: any) {
    console.error("Error fetching forecast:", error);
    throw new Error(`Could not fetch forecast for ${city}`);
  }
});
