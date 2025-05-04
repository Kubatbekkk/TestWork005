import { getForecast } from "@/utils/api";

type Props = {
  city: string;
};

export async function CityForecast({ city }: Props) {
  const forecast = await getForecast(city);

  return (
    <div className="row">
      {forecast.list.map((item: any, idx: number) => (
        <div key={idx} className="col-md-3 mb-4">
          <div className="card text-center p-3">
            <h5>{new Date(item.dt_txt).toLocaleString()}</h5>
            <p>{item.main.temp}°C</p>
            <p>{item.weather[0].description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
