/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react"
import PokeService from "../../services/PokeService"

import './style.css'
export function Team() {
    interface IPoke {
        id: string;
        name: string;
        image: string;
    }

    const [list, setList] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const showPokemons = async () => {
            const { team } = await PokeService.pokemonTeam()

            setList(team)
            setLoading(false);
        }
        showPokemons()
    }, [])

    async function handleRemovePokemon(id: number) {
        try {
            await PokeService.removePokemonFromTeam(id)
            setList(list.filter((poke) => poke.id !== id))
            alert('Pokémon removido do time')
        } catch (error) {
            console.log('Ocorreu um erro ao remover pokémon:', error);

        }
    }

    return (
        <div>
            <h1>Meu Time</h1>
            <div className="poke-list">
                {loading ? <p>Loading team...</p> : (
                    list.length === 0 ?
                        <h3>Nenhum pokémon adicionado ao time</h3>
                        :
                        list.map((pokemon: IPoke, index: number) => (
                            <div className="poke-card" key={index}>
                                <img src={pokemon.image} alt={pokemon.name} />
                                <p>{pokemon.name} #{pokemon.id}</p>
                                <button className="remove-pokemon" onClick={() => handleRemovePokemon(Number(pokemon.id))}>Remover</button>
                            </div>
                        ))
                )}
            </div>
        </div>
    )
}