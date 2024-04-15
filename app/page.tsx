"use client";
import AvailableGenreSeeds from "@/components/availableGenreSeeds/AvailableGenreSeeds";
import SelectedSeedSummary from "@/components/selectedSeedSummary/SelectedSeedSummary";
import { useEffect, useState } from "react";
// consider prefetching genres vs client side

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
      <span className="h-96">
        <AvailableGenreSeeds
          selectedGenres={selectedGenres}
          toggleGenre={toggleGenre}
        />
      </span>
      <aside>
        <SelectedSeedSummary selectedGenres={selectedGenres} />
      </aside>
    </main>
  );
}