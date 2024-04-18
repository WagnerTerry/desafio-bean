/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react"
import PokeService from "../../services/PokeService"

import './style.css'

export function PokemonList() {
    interface IPoke {
        name: string;
        sprites: {
            other: {
                dream_world: {
                    front_default: string;
                }
            }
        }
    }

    const [list, setList] = useState<any[]>([]);

    useEffect(() => {
        const showPokemons = async () => {
            const pokemons = await PokeService.gottaCatchAll()

            setList(pokemons)
        }
        showPokemons()
    }, [])

    return (
        <div>
            <h1>Lista de Pokémons</h1>

            <div className="poke-list">
            {list.map((pokemon: IPoke, index: number) => (
                <div className="poke-card" key={index}>
                    <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
                    <p>{pokemon.name}</p>
                    <button className="add-pokemon">Adicionar</button>
                    <button className="remove-pokemon">Remover</button>

                </div>
            ))}
        </div>

        </div>
    )
}