export interface DetailsModel {
  adult: boolean;
  genres: { name: string }[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: { name: string }[];
  production_countries: { name: string }[];
  release_date: string;
  spoken_languages: {
    english_name: string;
    name: string;
  }[];
  tagline: string;
  title: string;
  vote_average: number;
  vote_count: number;
}
