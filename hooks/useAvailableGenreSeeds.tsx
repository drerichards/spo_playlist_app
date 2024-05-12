import axios from "axios";
import useSWR from "swr";
import { SPOTIFY_API_URL_PREFIX } from "@/utils/constants";

const fetchGenres = async ([url, token]: [string, string]): Promise<
  string[]
> => {
  const response = await axios.get<GenresResponse>(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data.genres;
};

const useAvailableGenreSeeds = (token: string | null) => {
  const { data, error } = useSWR<string[]>(
    token
      ? [
          `${
            SPOTIFY_API_URL_PREFIX + "/recommendations/available-genre-seeds"
          }`,
          token,
        ]
      : null,
    fetchGenres,
    {
      revalidateOnFocus: false, // since this doesn't change often
      revalidateOnReconnect: true,
      onError: (error) => {
        console.error("Failed to fetch genres: ", error);
      },
    }
  );

  return {
    genres: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useAvailableGenreSeeds;
