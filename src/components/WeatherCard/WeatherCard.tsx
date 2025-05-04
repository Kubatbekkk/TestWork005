import Image from "next/image";
import clsx from "clsx";
import dayjs from "dayjs";
import { CurrentWeatherResponse, ForecastWeatherResponse } from "@/types";
import styles from "./WeatherCard.module.scss";

type WeatherCardProps = {
  forecast: ForecastWeatherResponse["list"][0] | CurrentWeatherResponse;
  location?: {
    cityName: string;
    country: string;
  };
};

export const WeatherCard: React.FC<WeatherCardProps> = ({
  forecast,
  location,
}) => {
  const formattedDate =
    "dt_txt" in forecast
      ? dayjs(forecast.dt_txt).format("dddd, MMMM D YYYY, h:mm A")
      : null;

  return (
    <div className={styles.weatherGrid}>
      {location?.cityName && location?.country && (
        <h5>
          {location.cityName}, {location.country}
        </h5>
      )}

      {formattedDate && <h5>{formattedDate}</h5>}

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
  );
};
