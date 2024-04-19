import  { useState, useEffect } from "react";
import { Team } from "../../views/Team";
import { PokemonList } from "../PokemonList";

import PokeService from "../../services/PokeService";

import './style.css';

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

export function Navbar(): JSX.Element {
    const [currentPage, setCurrentPage] = useState<string>('list');
    const [pokemonData, setPokemonData] = useState<IPokemon[]>([]);

    useEffect(() => {

        const showPokemons = async () => {
            if (currentPage === 'list' && pokemonData.length === 0) {
                try {
                    const data  = await PokeService.gottaCatchAll()
                    setPokemonData(data);
                } catch (error) {
                    console.error("Erro ao buscar dados de Pokémons:", error);
                }
            }
        }
        showPokemons()


    }, [currentPage, pokemonData.length]);

    const handleNavigation = (page: string) => {
        setCurrentPage(page);
    };

    return (
        <div className="navbar">
            <nav>
                <ul>
                    <li>
                        <button onClick={() => handleNavigation('list')}>Lista de Pokémons</button>
                    </li>
                    <li>
                        <button onClick={() => handleNavigation('team')}>Meu time</button>
                    </li>
                </ul>
            </nav>
            {/* Renderiza o componente apropriado com base na página atual */}
            {currentPage === 'list' ? <PokemonList data={pokemonData} /> : <Team  />}
        </div>
    );
}
