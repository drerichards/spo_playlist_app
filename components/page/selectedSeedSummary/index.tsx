import React from "react";

interface SelectedSeedSummaryProps {
  selectedGenres: Set<string>;
}

const SelectedSeedSummary = ({ selectedGenres }: SelectedSeedSummaryProps) => {
  return (
    <div>
      <ol role="list" className="">
        {Array.from(selectedGenres).map((genre: string, index: React.Key) => (
          <li
            key={index}
            className="capitalize text-white font-light py-2 px-4 rounded focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            {genre}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default SelectedSeedSummary;
