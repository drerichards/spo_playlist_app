import React from "react";
import useGetSpotifyAccessToken from '@/hooks/useGetSpotifyAccessToken'
import useAvailableGenreSeeds from '@/hooks/useAvailableGenreSeeds'

const AvailableGenreSeeds = () => {
  const token = useGetSpotifyAccessToken();
  const { genres, isLoading, isError } = useAvailableGenreSeeds(token);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading genres.</div>;

  console.log(genres)
  return (
    <div>
      <h1>Available Genre Seeds</h1>
      {/* <ul>
              {genres.map((genre: string) => (
                  <li key={genre}>{genre}</li>
              ))}
          </ul> */}
    </div>
  );
};

export default AvailableGenreSeeds;
