import React from "react";
import useGetSpotifyAccessToken from "@/hooks/useGetSpotifyAccessToken";
import useAvailableGenreSeeds from "@/hooks/useAvailableGenreSeeds";
import GenreAccordion from "./sub/GenreAccordion";

interface AvailableGenreSeedsProps {
  selectedGenres: Set<string>;
  toggleGenre: (genre: string) => void;
}

const AvailableGenreSeeds = ({selectedGenres, toggleGenre}: AvailableGenreSeedsProps) => {
  const token = useGetSpotifyAccessToken();
  const { genres, isLoading, isError } = useAvailableGenreSeeds(token);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading genres.</div>;

  return (
    <div className="max-w-full w-5/6">
      {genres && <GenreAccordion genres={genres} toggleGenre={toggleGenre} />}
    </div>
  );
};

export default AvailableGenreSeeds;
