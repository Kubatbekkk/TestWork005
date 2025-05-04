import Link from "next/link";
import { CityForecast } from "@/components";

export default async function Page({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
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
