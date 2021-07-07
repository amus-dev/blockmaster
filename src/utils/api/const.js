export const API_HOST = "https://api.themoviedb.org/3";
export const API_KEY =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_VERCEL_ENV
    : process.env.REACT_APP_API_KEY;
export const LANG = "es-ES";
