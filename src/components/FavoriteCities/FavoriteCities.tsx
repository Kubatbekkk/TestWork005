"use client";
import { useFavoriteStore } from "@/store";
import { FavoriteButton } from "../FavoriteButton";
import Link from "next/link";

export const FavoriteCities = () => {
  const favorites = useFavoriteStore((state) => state.favorites);

  if (favorites.length === 0) {
    return <div>No Favorite Cities yet.</div>;
  }

  return (
    <div>
      <h2 className="mb-4 text-center">Your Favorite Cities</h2>
      <ul className="list-group">
        {favorites.map((city) => (
          <li
            key={city.cityId}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <Link href={`/forecast/${city.name}`}>{city.name}</Link>
            <FavoriteButton
              city={{
                cityId: city.cityId,
                name: city.name,
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
