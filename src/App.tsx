import './App.css'
import Statki from './Statki.tsx';
import Saper from './Saper.tsx';
import Snake from './snake.tsx';
import changeTheme from './Theme.tsx';
import { useState } from 'react';

function App() {
  const [message, setMessage] = useState<React.ReactNode>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(true); // Add state for menu

  const handleClick = (gameId : number) => {
    const section = document.querySelector("section") as HTMLElement;
    section.style.display = "none";

    if (gameId === 1){
      setMessage(<Statki />);
    }
    
    if (gameId === 2){
      setMessage(<Snake />);
    }

    if (gameId === 3){
      setMessage(<Saper />);
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

  const handleHeaderClick = () => {
    window.location.reload();
  };

  return (
    <>
      <header>
        <h1 className='Logo' onClick={handleHeaderClick}>Gamezz Loader</h1>
      </header>
      <section>
        <div className="container">
          <img className="minizdj" src="src/assets/statek.png" alt="statek" onClick={() => handleClick(1)} ></img>
        </div>
        <div className="container">
          <img className="minizdj" src="src/assets/snake.png" alt="snake" onClick={() => handleClick(2)} ></img>
        </div>
        <div className="container">
          <img className="minizdj" src="src/assets/bomba.png" alt="bomba" onClick={() => handleClick(3)}></img>
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
            <img className="closeMenu" src="src/assets/close.png" alt="close" onClick={handleMenuClick}/>
            <div className="menuContent"><h2>Opcje</h2></div> {/* Add menu content */}
            <button className='changecolour' onClick={changeTheme}>Zmień kolor</button>
          </div>
        
      </main>
      <footer>
        <img className='zebatka' src="src/assets/zebatka.png" alt="zębatka" onClick={handleMenuClick}></img>
      </footer>
    </>
  )
}

export default App;
