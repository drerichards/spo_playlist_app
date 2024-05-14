import axios from "axios";
import useSWR from "swr";
import { SPOTIFY_API_URL_PREFIX } from "@/utils/constants";

const extractTrackData = (rawTracks: Track[]): Track[] => {
  return rawTracks.map(track => ({
    album: {
      external_urls: track.album.external_urls,
      id: track.album.id,
      name: track.album.name,
      images: track.album.images.map(image => ({
        height: image.height,
        url: image.url,
        width: image.width,
      }))
    },
    artists: track.artists.map(artist => ({
      external_urls: artist.external_urls,
      id: artist.id,
      name: artist.name,
    })),
    explicit: track.explicit,
    external_urls: track.external_urls,
    id: track.id,
    name: track.name,
    popularity: track.popularity,
    preview_url: track.preview_url,
  }));
}

const fetchTrackRecommendations = async ({
  token,
  params,
}: RecommendationsRequest): Promise<Track[]> => {
  const {
    selectedGenres,
    popularityRange,
    energyValue,
    vibeValue,
    danceabilityValue,
    acousticnessValue,
    instrumentalnessValue,
  } = params;

  const queryParams = new URLSearchParams({
    limit: "10",
  });

  if (Array.from(selectedGenres).length > 0) {
    queryParams.append("seed_genres", Array.from(selectedGenres).join(","));
  }

  if (Array.isArray(popularityRange)) {
    queryParams.append("min_popularity", popularityRange[0].toString());
    queryParams.append("max_popularity", popularityRange[1].toString());
  }

  queryParams.append("target_energy", energyValue.toString());
  queryParams.append("target_valence", vibeValue.toString());
  queryParams.append("target_danceability", danceabilityValue.toString());
  queryParams.append("target_acousticness", acousticnessValue.toString());
  queryParams.append(
    "target_instrumentalness",
    instrumentalnessValue.toString()
  );
  const url = `${SPOTIFY_API_URL_PREFIX}/recommendations?${queryParams.toString()}`;

  const response = await axios.get<RecommendationsResponse>(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(response.data.tracks)


  return extractTrackData(response.data.tracks);
};

const useGetTrackRecommendations = (
  token: string | null,
  params: RecommendationsParams
) => {
  const fetchKey = token ? JSON.stringify({ token, params }) : null;
  const { data, error } = useSWR(fetchKey, () => fetchTrackRecommendations({ token, params }), {
    revalidateOnFocus: false,
    revalidateOnReconnect: true,
    onError: (error) => {
      console.error("Failed to fetch track recommendations: ", error);
    },
  });

  return {
    tracks: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useGetTrackRecommendations;
