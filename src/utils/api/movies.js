import { API_HOST, API_KEY, LANG } from "./const";

export const getMoviesPopular = () => {
  const url = `${API_HOST}/movie/popular?api_key=${API_KEY}&language=${LANG}`;
  const params = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getMovieVideoYT = (id) => {
  const url = `${API_HOST}/movie/${id}/videos?api_key=${API_KEY}&language=${LANG}`;
  const params = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      console.log(err);
    });
};
