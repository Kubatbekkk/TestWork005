import { getWeatherForecast } from "@/utils/api";
import { WeatherCard } from "../WeatherCard";
import type { ForecastWeatherResponse } from "@/types";

type CityForecastProps = {
  city: string;
};

export async function CityForecast({ city }: CityForecastProps) {
  const forecast = await getWeatherForecast(city);

  const uniqueDays = forecast.list.reduce(
    (
      acc: (typeof forecast.list)[0][],
      item: ForecastWeatherResponse["list"][0],
    ) => {
      const date = new Date(item.dt_txt).toISOString().split("T")[0];

      if (
        !acc.find(
          (entry) =>
            new Date(entry.dt_txt).toISOString().split("T")[0] === date,
        )
      ) {
        acc.push(item);
      }
      return acc;
    },
    [],
  );

  return (
    <div>
      {uniqueDays.map((dayWeather) => {
        return (
          <div
            key={dayWeather.dt}
            className="mb-3 border rounded p-3 shadow-sm d-flex justify-content-between align-items-center flex-wrap"
          >
            <WeatherCard forecast={dayWeather} />
          </div>
        );
      })}
    </div>
  );
}
