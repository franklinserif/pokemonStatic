import axios from "axios";

const pokeApi = axios.create({
  baseURL: "https://pokeApi.co/api/v2",
});

export default pokeApi;
