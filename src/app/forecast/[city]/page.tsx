import Link from "next/link";
import { Suspense } from "react";
import { CityForecast } from "@/components";

type Props = {
  params: { city: string };
};

export default function ForecastPage({ params }: Props) {
  const { city } = params;

  return (
    <>
      <h1 className="mb-4">Forecast for {city}</h1>
      <Link href="/" className="btn btn-secondary mb-4">
        ← Back to search
      </Link>

      <Suspense
        fallback={
          <div className="btn btn-secondary mb-4">Loading forecast...</div>
        }
      >
        <CityForecast city={city} />
      </Suspense>
    </>
  );
}
