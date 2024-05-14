interface RecommendationsRequest {
  token: string | null;
  params: RecommendationsParams;
}

interface RecommendationsParams {
  selectedGenres: Set<Genre>;
  popularityRange: RecsFilterIndex;
  energyValue: RecsFilterIndex;
  vibeValue: RecsFilterIndex;
  danceabilityValue: RecsFilterIndex;
  acousticnessValue: RecsFilterIndex;
  instrumentalnessValue: RecsFilterIndex;
}

interface RecommendationsResponse {
  seeds: Seed[];
  tracks: Track[];
}

interface GenresResponse {
  genres: Genre[];
}

interface Seed {
  id: string;
}

interface Track {
  album: Album;
  artists: Artist[];
  explicit: boolean;
  external_urls: {
    spotify: string;
  };
  id: string;
  name: string;
  popularity: number;
  preview_url: string;
}

interface Album {
  external_urls: {
    spotify: string;
  };
  id: string;
  images: Image[];
  name: string;
}

interface Artist {
  external_urls: {
    spotify: string;
  };
  id: string;
  name: string;
}

interface Image {
  height: number;
  url: string;
  width: number;
}

type Genre = string;

type RecsRecsFilterIndex = number;

type RecsFilterRange = [number, number];

type RecsFilterIndex = RecsRecsFilterIndex | RecsFilterRange;
