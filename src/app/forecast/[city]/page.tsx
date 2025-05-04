import Link from "next/link";
import { CityForecast } from "@/components";

type Props = {
  params: { city: string };
};

export default async function ForecastPage({ params }: Props) {
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
