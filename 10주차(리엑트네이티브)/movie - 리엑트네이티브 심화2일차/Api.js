//이미지 url 공통부분들어갈거
const BASE_URL = "https://api.themoviedb.org/3/movie";
//API KEy
const API_KEY = "fa2ec8494cf09766170eaf6b3e1717a6";

export const getNowPlayings = () =>
  fetch(
    `${BASE_URL}/now_playing?api_key=${API_KEY}&language=en-US&page=1`
  ).then((res) => res.json());

//중간꺼 API호출함수
export const getTopRateds = () =>
  fetch(`${BASE_URL}/top_rated?api_key=${API_KEY}&language=en-US&page=1`).then(
    (res) => res.json()
  );

//맨아래꺼 API호출함수
export const getupComings = ({ pageParam = 1 }) =>
  fetch(
    `${BASE_URL}/upcoming?api_key=${API_KEY}&language=en-US&page=${pageParam}`
  ).then((res) => res.json());
