import React, { Dispatch, SetStateAction, useState } from "react";
import useGetSpotifyAccessToken from "@/hooks/useGetSpotifyAccessToken";
import useAvailableGenreSeeds from "@/hooks/useAvailableGenreSeeds";
import GenreAccordion from "./subcomponents/GenreAccordion";
import RangeSliderForm from './subcomponents/RangeSliderForm'

const AvailableGenreSeeds = () => {
  const token = useGetSpotifyAccessToken();
  const { genres, isLoading, isError } = useAvailableGenreSeeds(token);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading genres.</div>;

  return (
    <div className="max-w-full w-5/6">
      {genres && (
        <>
          <GenreAccordion genres={genres} />
          <RangeSliderForm />
        </>
      )}
    </div>
  );
};

export default AvailableGenreSeeds;
