import axios from "axios";
import useSWR from "swr";
import { SPOTIFY_API_URL_PREFIX } from "@/utils/constants";

interface FetchParams {
  token: string;
  params: {
    limit?: number;
    seed_genres: string;
    min_danceability?: number;
    max_danceability?: number;
    target_danceability?: number;
    target_popularity?: number;
  };
}

const fetchRecommendations = async ({ token, params }: FetchParams): Promise<Track[]> => {
  const baseUrl = 'https://api.spotify.com/v1/recommendations';
  
  // Create an instance of URLSearchParams
  const queryParams = new URLSearchParams();

  // Only append parameters that are not undefined
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined) {  // Check for undefined values
      queryParams.append(key, value.toString()); // Ensure values are converted to strings
    }
  });

  const url = `${baseUrl}?${queryParams.toString()}`;

  const response = await axios.get<RecommendationsResponse>(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data.tracks;
};

const useGetTrackRecommendations = (token: string | null, params: FetchParams['params']) => {
  const { data, error } = useSWR<Track[]>(
    token ? JSON.stringify({ token, params }) : null,
    () => fetchRecommendations({ token, params }),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      onError: (error) => {
        console.error("Failed to fetch track recommendations: ", error);
      },
    }
  );

  return {
    tracks: data,
    isLoading: !error && !data,
    isError: error,
  };
};


export default useGetTrackRecommendations;

// http GET 'https://api.spotify.com/v1/recommendations?limit=1&seed_genres=soul&min_danceability=0&max_danceability=50&target_danceability=25&target_popularity=100' \
//   Authorization:'Bearer 1POdFZRZbvb...qqillRxMr2z'