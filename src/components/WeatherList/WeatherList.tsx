import { getForecast } from "@/utils/api";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { FavoriteButton } from "../FavoriteButton";
import styles from "./WeatherList.module.scss";

type WeatherListProps = {
  city: string;
};

export async function WeatherList({ city }: WeatherListProps) {
  const forecast = await getForecast(city);

  if (!city) {
    return <div className="text-center mt-5">Enter a city to get forecast</div>;
  }

  console.log({ forecast });
  return (
    <>
      <h2 className="mb-3">Forecast for {forecast.name} - Current Weather</h2>{" "}
      <div className="mb-3 border rounded p-3 shadow-sm d-flex justify-content-between align-items-center flex-wrap">
        <div className={styles.weatherGrid}>
          <h5>
            {forecast.name}, {forecast.sys.country}
          </h5>
          <Image
            src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
            alt={forecast.weather[0].description}
            width={60}
            height={60}
            priority={true}
          />
          <div className={clsx(styles.temperature, "text-center")}>
            <strong>{Math.round(forecast.main.temp)}°C</strong>
            <div className={styles.tempRange}>
              <small>Max: {Math.round(forecast.main.temp_max)}°C</small> |{" "}
              <small>Min: {Math.round(forecast.main.temp_min)}°C</small>
            </div>
          </div>

          <div className={clsx(styles.additionalInfo, "text-center")}>
            <p className="mb-0 text-capitalize">
              Pressure: {forecast.main.pressure}
            </p>
            <small>Feels like: {Math.round(forecast.main.feels_like)}°C</small>
          </div>

          <div className={clsx(styles.additionalInfo, "text-center")}>
            <p className="mb-0 text-capitalize">
              {forecast.weather[0].description}
            </p>
            <small>Humidity: {forecast.main.humidity}%</small>
          </div>
        </div>

        <div className="d-flex align-items-center gap-2">
          <Link
            href={`/forecast/${city}`}
            className="btn btn-sm btn-outline-primary"
          >
            View Forecast
          </Link>
          <FavoriteButton
            city={{
              cityId: forecast.id,
              name: forecast.name,
            }}
          />
        </div>
      </div>
    </>
  );
}
