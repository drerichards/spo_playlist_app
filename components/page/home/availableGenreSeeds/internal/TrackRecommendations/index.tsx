import AccordionDropdown from "@/components/ui/AccordionDropdown";
import TracksTable from "@/components/ui/TracksTable";
import useGetTrackRecommendations from "@/hooks/useGetTrackRecommendations";
import React, { useState } from "react";
import { DummyHeader } from "@/components/ui/TracksTable/styles";
import { PAUSE_ICON, PLAY_ICON } from "@/utils/assets";

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
        <AccordionDropdown
          title="Track Recommendations"
          backgroundColor="#FFBC42"
          backgroundColorHover="#CC9601"
          noPaddingTop={true}
        >
          <div>
            <DummyHeader />
            <TracksTable tracks={tracks} />
          </div>
        </AccordionDropdown>
      )}
    </>
  );
};

export default TrackRecommendations;
