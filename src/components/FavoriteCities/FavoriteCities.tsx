"use client";
import { useFavoriteStore } from "@/store";
import { FavoriteButton } from "../FavoriteButton";
import Link from "next/link";

export const FavoriteCities = () => {
  const favorites = useFavoriteStore((state) => state.favorites);

  if (favorites.length === 0) {
    return <h2 className="mb-4 text-center">No Favorite Cities yet.</h2>;
  }

  return (
    <div>
      <h2 className="mb-4 text-center">Your Favorite Cities</h2>
      <ul className="list-group">
        {favorites.map((city) => (
          <li
            key={city.cityId}
            className="list-group-item d-flex align-items-center justify-content-between gap-2"
          >
            <Link
              href={`/forecast/${city.name}`}
              className="btn btn-sm btn-outline-primary w-75"
            >
              {city.name}, {city.country}
            </Link>
            <FavoriteButton
              city={{
                cityId: city.cityId,
                name: city.name,
                country: city.country,
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
