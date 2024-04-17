import { useState } from "react";
import { Home } from "./views/Home"
import { Team } from "./views/Team";

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'team':
        return <Team />;
      default:
        return <Home />;
    }
  };

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
  };
  return (
    <div>
      <nav>
        <ul>
          <li><button onClick={() => handleNavigation('home')}>Home</button></li>
          <li><button onClick={() => handleNavigation('team')}>Time</button></li>
        </ul>
      </nav>
      {renderPage()}
    </div>
  )
}

export default App
