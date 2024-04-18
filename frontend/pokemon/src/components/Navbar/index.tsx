import { useState } from "react";
import { PokemonList } from "../../views/PokemonList";
import { Team } from "../../views/Team";
import './style.css'
interface NavbarProps {
    page: string;
}

export function Navbar({ page }: NavbarProps) {
    const [currentPage, setCurrentPage] = useState(page);

    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return <PokemonList />;
            case 'team':
                return <Team />;
            default:
                return <PokemonList />;
        }
    };

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
            {renderPage()}
        </div>
    );
}
