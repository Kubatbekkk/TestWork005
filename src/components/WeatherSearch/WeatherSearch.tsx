"use client";

import clsx from "clsx";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import styles from "./WeatherSearch.module.scss";

export function WeatherSearch() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialCity = searchParams.get("city") || "";
  const [value, setValue] = useState(initialCity);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    const sanitizedValue = value.trim();
    const isValidCity = /^[a-zA-Z\s]+$/.test(sanitizedValue);

    if (!sanitizedValue || !isValidCity) {
      toast.error("Please enter a valid city name using only letters.", {
        position: "top-left",
        autoClose: 3000,
      });
      return;
    }

    const params = new URLSearchParams(searchParams);
    params.set("city", sanitizedValue);
    router.push(`/?${params.toString()}`);
  };

  useEffect(() => {
    const city = searchParams.get("city") || "";
    if (city !== value) {
      setValue(city);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  return (
    <form onSubmit={handleSearch} className="mb-4">
      <div className={clsx("d-flex gap-2 align-items-center", styles.column)}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter city"
          className="form-control"
        />
        <button
          type="submit"
          className={clsx("btn btn-primary w-25", styles.button)}
        >
          Search
        </button>
        <span>or</span>
        <Link
          href="/favorites"
          className={clsx("btn btn-success w-25", styles.button)}
        >
          Go to 🤍
        </Link>
      </div>
      <ToastContainer />
    </form>
  );
}
