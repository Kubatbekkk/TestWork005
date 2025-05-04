"use client";
import { useFavoriteSnapshot } from "@/store";
import clsx from "clsx";
import { useEffect, useState } from "react";
import styles from "./FavoriteButton.module.scss";

type AddToFavoriteProps = {
  city: {
    cityId: number;
    name: string;
  };
};

export const FavoriteButton = ({ city }: AddToFavoriteProps) => {
  const { favorites, addFavorite, removeFavorite } = useFavoriteSnapshot();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const isLiked =
    isClient &&
    favorites.some(
      (favorite) => favorite.name.toLowerCase() === city.name.toLowerCase(),
    );

  const handleClick = () => {
    if (isLiked) {
      removeFavorite(city.cityId);
    } else {
      addFavorite(city);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={clsx(
        "btn btn-sm",
        {
          "btn-primary text-light": !isLiked,
          "btn-danger text-light": isLiked,
        },
        styles.addBtn,
      )}
    >
      {isLiked ? "Remove from 🤍" : "Add to 🤍"}
    </button>
  );
};
