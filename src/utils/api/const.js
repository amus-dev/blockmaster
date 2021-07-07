export const API_HOST = process.env.REACT_APP_API_HOST;
export const LANG = process.env.REACT_APP_LANG;
export const API_KEY =
  process.env.NODE_ENV === "production"
    ? process.env.API_KEY_PRODUCTION
    : process.env.REACT_APP_API_KEY;
