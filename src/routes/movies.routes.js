import { Router } from "express";
import { getNowPlayingMovies } from "../controllers/movies.controller.js";
import { getMoviePosters } from "../controllers/movies.controller.js";

const router = Router();

router.get("/now-playing", getNowPlayingMovies);
router.get("/posters", getMoviePosters);


export default router;
