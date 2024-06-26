import { useState } from "react";
import PokeService from "../../services/PokeService";

interface IPokemon {
    id: string;
    name: string;
    sprites: {
        other: {
            dream_world: {
                front_default: string;
            }
        }
    }
}

interface PokemonListProps {
    data: IPokemon[];
}

export function PokemonList({ data }: PokemonListProps): JSX.Element {
    const [searchTerm, setSearchTerm] = useState<string>("");


    async function handleAddPokemon(id: number, name: string, image: string) {
        const data = {
            id,
            name,
            image
        }

        try {
            const { team } = await PokeService.pokemonTeam()
            if (team.length > 4) {
                alert("O time já possui o máximo de 5 Pokémon")
                return
            }
            const teamData = await PokeService.getPokemonById(id);
            if (!teamData || !teamData.team_by_pk) {
                console.log("Pokémon não encontrado no time");
            } else {
                const { team_by_pk } = teamData;
                if (id === team_by_pk.id) {
                    alert("Pokémon já está adicionado ao time");
                    return;
                }
            }

            if (!id || !name.trim()) {
                alert("Erro na requisição para adicionar pokémon");
                return;
            }
            await PokeService.addPokemonTeam(data);
            alert("Pokémon adicionado ao time");
        } catch (error) {
            console.log('Ocorreu um erro ao adicionar pokémon:', error);
        }
    }

    const filteredData = data.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <h1>Lista de Pokémons</h1>
            {data.length > 0 && (
                <input
                    type="text"
                    className="search-input"
                    placeholder="Buscar pokémon"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            )}
            <div className="poke-list">
                {data.length === 0 ? (
                    <p>Carregando...</p>
                ) : (
                    filteredData.length > 0 ? filteredData.map((pokemon: IPokemon, index: number) => (
                        <div className="poke-card" key={index}>
                            <img
                                src={pokemon.sprites.other.dream_world.front_default}
                                alt={pokemon.name}
                            />
                            <p>
                                {pokemon.name} #{pokemon.id}
                            </p>
                            <button
                                className="add-pokemon"
                                onClick={() =>
                                    handleAddPokemon(
                                        Number(pokemon.id),
                                        pokemon.name,
                                        pokemon.sprites.other.dream_world.front_default
                                    )
                                }
                            >
                                Adicionar
                            </button>
                            
                        </div>
                    )) : <p>Nenhum pokémon encontrado</p>
                )}
            </div>
        </div>
    );
}
