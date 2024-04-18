import axios from "axios";

const BaseURL = "https://pokeapi.co/api/v2/pokemon/?limit=1302";

export default class PokeService {
  static getAllPokemons = async () => {
    const result = await axios.get(BaseURL);
    return result.data;
  };
}
