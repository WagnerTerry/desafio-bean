/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react"
import PokeService from "../../services/PokeService"

export function PokemonList() {
    // interface IPoke {
    //     results: [];
    // }

    const [list, setList] = useState<any[]>([]);

    useEffect(() => {
        const showPokemons = async () => {
            const pokemons = await PokeService.gottaCatchAll()

            setList(pokemons)
        }
        showPokemons()
    }, [])

    return (
        <>
            <h1>Pokedex</h1>

            <div className="poke-list">
                {list.map((pokemon, index) => (
                    <div key={index}>
                        <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
                      
                    </div>
                ))}

            </div>

        </>
    )
}