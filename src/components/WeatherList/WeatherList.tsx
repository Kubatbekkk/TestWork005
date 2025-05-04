import { getCurrentWeather } from "@/utils/api";
import Link from "next/link";
import { FavoriteButton } from "../FavoriteButton";
import { WeatherCard } from "../WeatherCard";

type WeatherListProps = {
  city: string | undefined;
};

export async function WeatherList({ city }: WeatherListProps) {
  if (!city) {
    return <div className="text-center mt-5">Enter a city to get forecast</div>;
  }

  let forecast;

  try {
    forecast = await getCurrentWeather(city);
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An unexpected error occurred.";
    return (
      <div className="text-center mt-5">
        <h2>{errorMessage}</h2>
        <p>Please try searching for a different city.</p>
      </div>
    );
  }

  return (
    <>
      <h2 className="mb-3">Forecast for {forecast.name} - Current Weather</h2>{" "}
      <div className="mb-3 border rounded p-3 shadow-sm d-flex justify-content-between align-items-center flex-wrap">
        <WeatherCard
          forecast={forecast}
          location={{
            cityName: forecast.name,
            country: forecast.sys.country,
          }}
        />

        <div className="d-flex align-items-center gap-2">
          <Link
            href={`/forecast/${city}`}
            className="btn btn-sm btn-outline-primary"
          >
            View Forecast
          </Link>
          <FavoriteButton
            city={{
              cityId: Number(forecast.id),
              name: forecast.name,
              country: forecast.sys.country,
            }}
          />
        </div>
      </div>
    </>
  );
}
