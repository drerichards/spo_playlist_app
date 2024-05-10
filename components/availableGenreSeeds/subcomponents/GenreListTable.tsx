import React, { useState } from "react";
import AccordionDropdown from "@/components/lib/AccordionDropdown";

interface GenreListTableProps {
  genres: string[];
}

const GenreListTable = ({ genres }: GenreListTableProps) => {
  const [selectedGenres, setSelectedGenres] = useState<Set<string>>(new Set());

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
    <div className="text-xs text-right mb-2 italic font-semibold">
      {Array.from(selectedGenres).join(" • ")}
    </div>
  );

  return (
    <>
      <AccordionDropdown title="Genres" backgroundColor="bg-blue-500">
        <ul
          role="list"
          className="grid lg:grid-cols-5 md:grid-cols-3 gap-4 overflow-auto max-h-80 h-full"
        >
          {genres.map((genre: string, index: React.Key | null | undefined) => (
            <li key={index} className="text-center">
              <button
                onClick={(e: React.MouseEvent<HTMLElement>) =>
                  toggleGenre(genre)
                }
                className={`text-sm btn capitalize text-white font-light py-2 px-4 rounded focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out ${
                  selectedGenres.has(genre)
                    ? "bg-blue-700"
                    : "hover:bg-blue-500"
                }`}
              >
                {genre}
              </button>
            </li>
          ))}
        </ul>
      </AccordionDropdown>
      {selectedGenres.size > 0 ? formatGenreList() : <br />}
    </>
  );
};

export default GenreListTable;
