


export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.API_KEY}`,
  },
};

export const BASE_URL="https://api.themoviedb.org/3/movie/now_playing"