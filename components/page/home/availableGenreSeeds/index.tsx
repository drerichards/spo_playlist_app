import React, { Dispatch, SetStateAction, useState } from "react";
import useGetSpotifyAccessToken from "@/hooks/useGetSpotifyAccessToken";
import useAvailableGenreSeeds from "@/hooks/useAvailableGenreSeeds";
import GenreListTable from "./internal/GenreListTable";
import RangeSliderForm from "./internal/RangeSliderForm";
import TrackRecommendations from "./internal/TrackRecommendations";

const AvailableGenreSeeds = () => {
  const token = useGetSpotifyAccessToken();
  const { genres, isLoading, isError } = useAvailableGenreSeeds(token);

  const [selectedGenres, setSelectedGenres] = useState<Set<string>>(new Set());
  const [popularityRange, setPopularityRange] = useState<
    number | [number, number]
  >([1, 100]);
  const [energyValue, setEnergyValue] = useState<number | [number, number]>(5);
  const [vibeValue, setVibeValue] = useState<number | [number, number]>(5);
  const [danceabilityValue, setDanceabilityValue] = useState<
    number | [number, number]
  >(5);
  const [acousticnessValue, setAcousticnessValue] = useState<
    number | [number, number]
  >(5);
  const [instrumentalnessValue, setInstrumentalnessValue] = useState<
    number | [number, number]
  >(5);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading genres.</div>;

  const formatGenreList = () => (
    <div className="text-xs text-right mb-2 italic font-semibold capitalize">
      {Array.from(selectedGenres).join(" • ")}
    </div>
  );

  return (
    <div className="max-w-full w-full">
      {genres && (
        <main className="">
          <section className="flex">
            <div className="w-1/2">
              <GenreListTable
                genres={genres}
                selectedGenres={selectedGenres}
                setSelectedGenres={setSelectedGenres}
              />
            </div>
            <div className="w-1/2">
              <RangeSliderForm
                popularityRange={popularityRange}
                setPopularityRange={setPopularityRange}
                energyValue={energyValue}
                setEnergyValue={setEnergyValue}
                vibeValue={vibeValue}
                setVibeValue={setVibeValue}
                danceabilityValue={danceabilityValue}
                setDanceabilityValue={setDanceabilityValue}
                acousticnessValue={acousticnessValue}
                setAcousticnessValue={setAcousticnessValue}
                instrumentalnessValue={instrumentalnessValue}
                setInstrumentalnessValue={setInstrumentalnessValue}
              />
            </div>
          </section>
          <aside>
            <TrackRecommendations />
          </aside>
        </main>
      )}
    </div>
  );
};

export default AvailableGenreSeeds;
