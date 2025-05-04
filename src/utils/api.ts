import type { CurrentWeatherResponse, ForecastWeatherResponse } from "@/types";
import axios from "axios";
import { cache } from "react";

const API_KEY = process.env.OPENWEATHERMAP_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const fetchWeatherData = cache(
  async <T>(
    endpoint: string,
    params: Record<string, string | number>,
  ): Promise<T> => {
    try {
      const response = await axios.get(`${BASE_URL}/${endpoint}`, {
        params: {
          units: "metric",
          appid: API_KEY,
          lang: "en",
          ...params,
        },
      });

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const status = error.response?.status;

        if (status === 404) {
          console.error("City not found.");
          throw new Error(`City "${params.q}" was not found.`);
        }
        console.error(`Unexpected API error: ${error.message}`);
        throw new Error(
          "An unexpected error occurred while fetching weather data.",
        );
      }

      throw error;
    }
  },
);

export const getCurrentWeather = cache(async (city: string) => {
  return fetchWeatherData<CurrentWeatherResponse>("weather", { q: city });
});

export const getWeatherForecast = cache(async (city: string) => {
  return fetchWeatherData<ForecastWeatherResponse>("forecast", { q: city });
});
