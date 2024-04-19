import axios from "axios";

const BaseURL = "https://pokeapi.co/api/v2/pokemon";
const BaseURLHasura = "http://localhost:8080/api/rest/poke";

interface IPokemon {
  url: string;
}

export interface ITeamPokemon {
  id: number;
  name: string;
  image?: string;
}
export default class PokeService {
  static gottaCatchAll = async () => {
    const { data } = await axios.get(`${BaseURL}/?limit=386`);

    const pokemonPromises = data.results.map((poke: IPokemon) => {
      return this.getPokemonDetails(poke);
    });

    const pokemonDetails = await Promise.all(pokemonPromises);

    return pokemonDetails;
  };

  static getPokemonDetails = async (pokemon: IPokemon) => {
    const { data } = await axios.get(pokemon.url);
    return data;
  };

  static pokemonTeam = async () => {
    const { data } = await axios.get(`${BaseURLHasura}/myteam`);
    return data;
  };

  static getPokemonById = async (id: number) => {
    const { data } = await axios.get(`${BaseURLHasura}/myteam/${id}`);
    return data;
  };

  static addPokemonTeam = async (data: ITeamPokemon) => {
    const response = await axios.post(`${BaseURLHasura}/addpokemon`, data);
    return response.data;
  };
}
