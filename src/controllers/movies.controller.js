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
