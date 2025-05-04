import { create } from "zustand";
import { persist } from "zustand/middleware";
import { useSyncExternalStore } from "react";
interface Favorite {
  cityId: number;
  name: string;
}
interface FavoriteState {
  favorites: Favorite[];
  addFavorite: (city: Favorite) => void;
  removeFavorite: (cityId: number) => void;
}

export const useFavoriteStore = create<FavoriteState>()(
  persist(
    (set) => ({
      favorites: [],
      addFavorite: (city) =>
        set((state) => {
          const exists = state.favorites.some(
            (item) => item.name.toLowerCase() === city.name.toLowerCase(),
          );

          if (exists) return state;

          return {
            favorites: [...state.favorites, city],
          };
        }),
      removeFavorite: (city) =>
        set((state) => ({
          favorites: state.favorites.filter((c) => c.cityId !== city),
        })),
    }),
    {
      name: "favorite-cities",
    },
  ),
);

export function useFavoriteSnapshot() {
  const subscribe = useFavoriteStore.subscribe;
  const getSnapshot = useFavoriteStore.getState;

  return useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
}
