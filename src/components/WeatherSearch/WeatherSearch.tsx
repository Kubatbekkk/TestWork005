"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export function WeatherSearch() {
  const [value, setValue] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!value) return;

    const params = new URLSearchParams(searchParams);
    params.set("city", value);
    router.push(`/?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSearch} className="mb-4">
      <div className="d-flex gap-2 align-items-center">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter city"
          className="form-control"
        />
        <button type="submit" className="btn btn-primary w-25">
          Search
        </button>
        <span>or</span>
        <Link href="/favorites" className="btn btn-success w-25">
          Go to 🤍
        </Link>
      </div>
    </form>
  );
}
