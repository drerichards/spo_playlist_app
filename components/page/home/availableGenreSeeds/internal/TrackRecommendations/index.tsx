import useGetTrackRecommendations from "@/hooks/useGetTrackRecommendations";
import React, { useState } from "react";

interface TrackRecommendationsProps {
  token: string | null;
  recsFetchParams: RecommendationsParams;
}

const TrackRecommendations: React.FC<TrackRecommendationsProps> = ({
  token,
  recsFetchParams,
}) => {
  const { tracks, isLoading, isError } = useGetTrackRecommendations(
    token,
    recsFetchParams
  );

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading track recommendations.</div>;

  return (
    <>
      {tracks && tracks.length > 0 && (
        <div>
          <h2>Track Recommendations</h2>
          <ul>
            {tracks.map((track) => (
              <li key={track.id}>{track.artists[0].name} - {track.name}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default TrackRecommendations;
