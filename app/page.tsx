"use client";
import AvailableGenreSeeds from "@/components/page/availableGenreSeeds/AvailableGenreSeeds";
import SelectedSeedSummary from "@/components/page/selectedSeedSummary/SelectedSeedSummary";
import { useEffect, useState } from "react";

export default function Home() {
  const [selectedGenres, setSelectedGenres] = useState<Set<string>>(new Set());

  const toggleGenre = (genre: string) => {
    setSelectedGenres((prevSelectedGenres) => {
      const newSet = new Set(prevSelectedGenres);
      if (newSet.has(genre)) {
        newSet.delete(genre);
      } else if (selectedGenres.size < 5) {
        newSet.add(genre);
      }
      return newSet;
    });
  };

  return (
    <main className="flex min-h-screen flex-ro justify-center p-24">
      <span className="h-96 w-full">
        <AvailableGenreSeeds />
      </span>
      <aside></aside>
    </main>
  );
}
