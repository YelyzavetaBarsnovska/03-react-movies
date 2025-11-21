import axios from "axios";
import type { MovieResponse } from "../types/movie";

const BASE_URL = "https://api.themoviedb.org/3";
const SEARCH_PATH = "/search/movie";
const TMDB_URL = `${BASE_URL}${SEARCH_PATH}`;

const TOKEN = import.meta.env.VITE_TMDB_TOKEN as string | undefined;

export async function fetchMovies(query: string) {
  if (!TOKEN) {
    throw new Error(
      "Missing TMDB token. Set VITE_TMDB_TOKEN in your environment variables."
    );
  }

  const config = {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
    params: {
      query,
      include_adult: false,
      language: "en-US",
      page: 1,
    },
  };

  const response = await axios.get<MovieResponse>(TMDB_URL, config);

  return response.data.results;
}
