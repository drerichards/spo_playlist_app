import React, { useState } from "react";

interface GenreAccordionProps {
  genres: string[];
}

const GenreAccordion = ({ genres }: GenreAccordionProps) => {
  const [selectedGenres, setSelectedGenres] = useState<Set<string>>(new Set());
  const [isOpen, setIsOpen] = useState<boolean>(false);

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

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        onClick={toggleAccordion}
        className="w-full text-left mb-2 bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Genres
      </button>
      <div
        className={`transition-height duration-500 ease-in-out ${
          isOpen ? "max-h-96" : "max-h-0"
        } overflow-hidden`}
      >
        <ul
          role="list"
          className="grid lg:grid-cols-5 md:grid-cols-3 gap-4 overflow-auto max-h-80 h-full"
        >
          {genres.map((genre: string, index: React.Key | null | undefined) => (
            <li key={index} className="text-center">
              <button
                onClick={() => toggleGenre(genre)}
                className="text-sm btn hover:bg-blue-700 capitalize text-white font-light py-2 px-4 rounded focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
              >
                {genre}
              </button>
            </li>
          ))}
        </ul>
      </div>
      {selectedGenres}
    </>
  );
};

export default GenreAccordion;
