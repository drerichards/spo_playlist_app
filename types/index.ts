interface RecommendationsResponse {
  seeds: Seed[];
  tracks: Track[];
}

interface GenresResponse {
  genres: string[];
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
