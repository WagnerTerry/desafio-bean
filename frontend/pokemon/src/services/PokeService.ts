import axios from "axios";

const BaseURL = "https://pokeapi.co/api/v2/pokemon";

interface IPokemon {
  url: string;
}
export default class PokeService {
  static gottaCatchAll = async () => {
    const { data } = await axios.get(`${BaseURL}/?limit=151`);

    const pokemonPromises = data.results.map((poke) => {
      return this.getPokemonDetails(poke);
    });

    const pokemonDetails = await Promise.all(pokemonPromises);

    return pokemonDetails;
  };

  static getPokemonDetails = async (pokemon: IPokemon) => {
    const { data } = await axios.get(pokemon.url);
    return data;
  };
}
