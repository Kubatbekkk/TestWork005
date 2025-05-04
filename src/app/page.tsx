import { WeatherSearch, WeatherList } from "@/components";
import { Suspense } from "react";

export default async function HomePage({
  searchParams,
}: {
  searchParams: { city?: string };
}) {
  const { city } = await searchParams;

  return (
    <div className="container py-5">
      <WeatherSearch />
      <Suspense fallback={<div>Loading forecast...</div>}>
        {city && <WeatherList city={city} />}
      </Suspense>
    </div>
  );
}
