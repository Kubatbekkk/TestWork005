import Link from "next/link";
import { CityForecast } from "@/components";
import { Metadata } from "next";
import { getCurrentWeather } from "@/utils/api";

type Props = {
  params: Promise<{ city: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const forecast = await getCurrentWeather(city);

  return {
    title: `${forecast.name}, ${forecast.sys.country}`,
  };
}

export default async function Page({ params }: Props) {
  const { city } = await params;

  return (
    <>
      <h1 className="mb-4">
        Forecast for <span className="text-capitalize">{city}</span>
      </h1>
      <Link href="/" className="btn btn-secondary mb-4">
        ← Back to search
      </Link>

      <CityForecast city={city} />
    </>
  );
}
