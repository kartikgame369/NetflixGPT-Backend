import fetch from "node-fetch";
import { BASE_URL } from "../utils/Constants.js";

export const getNowPlayingMovies = async (req, res) => {
  try {
    console.log("TMDB URL:", BASE_URL);

    const response = await fetch(
      `${BASE_URL}?api_key=${process.env.API_KEY}`
    );

    const data = await response.json();
    // console.log("API RESPONSE:", data);

    return res.status(200).json({
      success: true,
      results: data.results || [],
    });
  } catch (error) {
    console.error("FETCH ERROR:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch movies",
    });
  }
};

export const getMoviePosters = async (req, res) => {
  try {
    // Call TMDB using API Key (same as your working movies API)
    const response = await fetch(
      `${BASE_URL}?api_key=${process.env.API_KEY}`
    );

    const data = await response.json();

    if (!data?.results) {
      return res.status(500).json({
        success: false,
        tmdbError: data,
      });
    }

    // Extract only poster paths
    const posters = data.results
      .filter(movie => movie.poster_path)
      .map(movie => movie.poster_path);

    return res.status(200).json({
      success: true,
      posters,
    });

  } catch (error) {
    console.error("TMDB FETCH ERROR:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch movie posters",
    });
  }
};