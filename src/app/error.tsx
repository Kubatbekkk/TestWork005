"use client";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="d-flex flex-column justify-content-center min-vh-100 align-items-center">
      <h2 className="mb-8">Something went wrong!</h2>
      <button className="btn btn-lg bg-info" onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
}
