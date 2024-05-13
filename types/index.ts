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
  href: string;
  id: string;
  name: string;
  popularity: number;
  preview_url: string;
  type: string;
  uri: string;
}

interface Album {
  href: string;
  id: string;
  name: string;
  uri: string;
}

interface Artist {
  href: string;
  id: string;
  name: string;
  uri: string;
}

type Genre = string;

type RecsRecsFilterIndex = number;

type RecsFilterRange = [number, number];

type RecsFilterIndex = RecsRecsFilterIndex | RecsFilterRange;
