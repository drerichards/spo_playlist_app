import React, { useState } from "react";
import useGetSpotifyAccessToken from "@/hooks/useGetSpotifyAccessToken";
import useAvailableGenreSeeds from "@/hooks/useAvailableGenreSeeds";
import useGetTrackRecommendations from "@/hooks/useGetTrackRecommendations";

import GenreListTable from "./internal/GenreListTable";
import RangeSliderForm from "./internal/RangeSliderForm";
import TrackRecommendations from "./internal/TrackRecommendations";

const AvailableGenreSeeds = () => {
  const token = useGetSpotifyAccessToken();
  const { genres, isLoading, isError } = useAvailableGenreSeeds(token);

  const [selectedGenres, setSelectedGenres] = useState<Set<Genre>>(new Set());
  const [popularityRange, setPopularityRange] = useState<RecsFilterIndex>([
    1, 100,
  ]);
  const [energyValue, setEnergyValue] = useState<RecsFilterIndex>(5);
  const [vibeValue, setVibeValue] = useState<RecsFilterIndex>(5);
  const [danceabilityValue, setDanceabilityValue] =
    useState<RecsFilterIndex>(5);
  const [acousticnessValue, setAcousticnessValue] =
    useState<RecsFilterIndex>(5);
  const [instrumentalnessValue, setInstrumentalnessValue] =
    useState<RecsFilterIndex>(5);

  const initialRecsParams: RecommendationsParams = {
    selectedGenres: new Set(),
    popularityRange: [1, 100],
    energyValue: 5,
    vibeValue: 5,
    danceabilityValue: 5,
    acousticnessValue: 5,
    instrumentalnessValue: 5,
  };

  const [recsFetchParams, setRecsFetchParams] =
    useState<RecommendationsParams>(initialRecsParams);
  const [shouldFetchTracks, setShouldFetchTracks] = useState(false);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading genres.</div>;

  const formatGenreList = () => (
    <div className="text-xs text-right mb-2 italic font-semibold capitalize">
      {Array.from(selectedGenres).join(" • ")}
    </div>
  );

  const handleRecommendationRequest = () => {
    setRecsFetchParams({
      ...recsFetchParams,
      selectedGenres,
      popularityRange,
      energyValue,
      vibeValue,
      danceabilityValue,
      acousticnessValue,
      instrumentalnessValue,
    });
    setShouldFetchTracks(true);
  };

  return (
    <div className="max-w-full w-full">
      {genres && (
        <main className="">
          <button
            onClick={handleRecommendationRequest}
            className="py-3 px-4 border"
          >
            Search
          </button>
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
          {shouldFetchTracks && (
            <section>
              <TrackRecommendations
                token={token}
                recsFetchParams={recsFetchParams}
              />
            </section>
          )}
        </main>
      )}
    </div>
  );
};

export default AvailableGenreSeeds;
