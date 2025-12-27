import { API_OPTIONS, TMDB_BASE_URL } from "../utils/Constants.js";

export const getNowPlayingMovies = async (req, res) => {
  try {
    const response = await fetch(
      `${TMDB_BASE_URL}`,
      API_OPTIONS
    );

    const data = await response.json();

    return res.status(200).json({
      success: true,
      results: data.results,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch movies",
    });
  }
};
