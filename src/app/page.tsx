import { WeatherSearch, WeatherList } from "@/components";
import { Suspense } from "react";

export default async function HomePage({
  searchParams,
}: {
  searchParams: { city?: string };
}) {
  const { city } = await searchParams;

  return (
    <>
      <WeatherSearch />
      <Suspense fallback={<div>Loading forecast...</div>}>
        <WeatherList city={city} />
      </Suspense>
    </>
  );
}
