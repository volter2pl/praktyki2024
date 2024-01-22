import './App.css'
import Statki from './Statki.tsx'
import changeTheme from './Theme.tsx';
import { useState } from 'react';

function App() {
  const [message, setMessage] = useState<React.ReactNode>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(true); // Add state for menu

  const handleClick = (gameId : number) => {
    hideSection();
    if (gameId === 1){
      
      setMessage(<Statki />);
    }
  };
  
  const handleMenuClick = () => {
    const menu = document.querySelector(".menu") as HTMLElement;
    if (menu.style.display === "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
    setIsMenuOpen(isMenuOpen);  //Toggle menu state
  };

  const hideSection = () => {
    const section = document.querySelector("section") as HTMLElement;
    section.style.display = "none";
  }

  return (
    <>
      <header>
        <h1 className='Logo'>Gamezz Loader</h1>
      </header>
      <section>
        <div className="container">
          <img className="minizdj" src="src/assets/statek.png" alt="statek" onClick={() => handleClick(1)} ></img>
        </div>
        <div className="container">
          {/*<img className="minizdj" src="src/assets/gra2.png" alt="gra2"></img>*/}
        </div>
        <div className="container">
          {/*<img className="minizdj" src="src/assets/gra3.png" alt="gra3"></img>*/}
        </div>
        <div className="container">
          {/*<img className="minizdj" src="src/assets/gra4.png" alt="gra4"></img>*/}
        </div>
        <div className="container">
          {/*<img className="minizdj" src="src/assets/gra5.png" alt="gra5"></img>*/}
        </div>
      </section>
      <main className={isMenuOpen ? 'menuOpen' : ''} >
        {message}
        
          <div className="menu">
            <div className="menuContent"><h2>Opcje</h2></div> {/* Add menu content */}
            <button className='changecolour' onClick={changeTheme}>Zmień kolor</button>
          </div>
        
      </main>
      <footer>
        <button className='options' onClick={handleMenuClick}>Opcje</button> {/* Add menu button */}
      </footer>
    </>
  )
}

export default App;
