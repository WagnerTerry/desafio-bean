/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react"
import PokeService from "../../services/PokeService"

import './style.css'

export function PokemonList() {
    interface IPoke {
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

    const [list, setList] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const showPokemons = async () => {
            const pokemons = await PokeService.gottaCatchAll()

            setList(pokemons)
            setLoading(false);
        }
        showPokemons()
    }, [])

    async function handleAddPokemon(id: number, name: string, image: string) {
        const data = {
            id, 
            name,
            image
        }
        console.log("data", data)
        
        try {

            const { team } = await PokeService.pokemonTeam()
            
            if(team.length > 4){
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
            console.error('Ocorreu um erro ao adicionar pokémon:', error);
        }
    } 

    return (
        <div>
            <h1>Lista de Pokémons</h1>

            <div className="poke-list">
            {loading && <p>Loading...</p>}

            {list.map((pokemon: IPoke, index: number) => (
                <div className="poke-card" key={index}>
                    <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
                    <p>{pokemon.name} #{pokemon.id}</p>
                    <button className="add-pokemon" onClick={() => handleAddPokemon(Number(pokemon.id), pokemon.name, pokemon.sprites.other.dream_world.front_default)}>Adicionar</button>
                    <button className="remove-pokemon">Remover</button>

                </div>
            ))}
        </div>

        </div>
    )
}