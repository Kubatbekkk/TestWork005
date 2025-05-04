import { FavoriteCities } from "@/components/FavoriteCities/FavoriteCities";
import Link from "next/link";

export default function Favorites() {
  return (
    <>
      <Link href="/" className="btn btn-secondary mb-4">
        ← Back to search
      </Link>
      <FavoriteCities />
    </>
  );
}
