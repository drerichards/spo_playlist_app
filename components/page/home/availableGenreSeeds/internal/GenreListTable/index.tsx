import React, { useState } from "react";
import AccordionDropdown from "@/components/ui/AccordionDropdown";

interface GenreListTableProps {
  genres: string[];
  selectedGenres: Set<string>;
  setSelectedGenres: React.Dispatch<React.SetStateAction<Set<string>>>;
}

const GenreListTable = ({
  genres,
  selectedGenres,
  setSelectedGenres,
}: GenreListTableProps) => {
  const toggleGenre = (genre: string) => {
    setSelectedGenres((prevSelectedGenres) => {
      const newSet = new Set(prevSelectedGenres);
      if (newSet.has(genre)) {
        newSet.delete(genre);
      } else if (newSet.size < 5) {
        newSet.add(genre);
      }
      return newSet;
    });
  };

  const formatGenreList = () => (
    <div className="">
      {Array.from(selectedGenres).map((genre) => (
        <button
          key={genre}
          onClick={() => toggleGenre(genre)}
          className="border text-white rounded-full px-3 py-1 font-semibold mr-2 text-xs italic capitalize"
        >
          {genre}
        </button>
      ))}
    </div>
  );

  const bannerTitle = (
    <div>
      Genres <span className="text-xs opacity-90 ml-1">Max 5</span>
    </div>
  );
  const bannerSelectedGenres = selectedGenres.size > 0 && formatGenreList();

  return (
    <>
      <AccordionDropdown
        title={bannerTitle}
        backgroundColor="bg-theme-green"
        bannerContent={bannerSelectedGenres}
      >
        <ul role="list" className="grid lg:grid-cols-5 md:grid-cols-3 gap-4">
          {genres.map((genre: string, index: React.Key | null | undefined) => (
            <li key={index} className="text-center">
              <button
                onClick={() => toggleGenre(genre)}
                className={`text-sm btn capitalize text-white font-light py-2 px-4 rounded focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out ${
                  selectedGenres.has(genre)
                    ? "bg-theme-green-dark"
                    : "hover:bg-theme-yellow"
                }`}
              >
                {genre}
              </button>
            </li>
          ))}
        </ul>
      </AccordionDropdown>
    </>
  );
};

export default GenreListTable;
