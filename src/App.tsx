import './App.css'
import Tic_Tac_Toe from './Tic_Tac_Toe.tsx';
import changeTheme from './Theme.tsx';
import { useState } from 'react';


function App() {
  const [message, setMessage] = useState<React.ReactNode>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(true); // Add state for menu

  const handleClick = (gameId : number) => {
    const section = document.querySelector("section") as HTMLElement;
    section.style.display = "none";

    
    if (gameId === 4){
      setMessage(<Tic_Tac_Toe />);
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
          <img className="minizdj" src="https://i.ibb.co/R61mkWc/statek.jpg" alt="statek" onClick={() => handleClick(1)} ></img>
        </div>
        <div className="container">
          <img className="minizdj" src="https://i.ibb.co/Jv4NJgN/waz.jpg" alt="snake" onClick={() => handleClick(2)} ></img>
        </div>
        <div className="container">
          <img className="minizdj" src="https://i.ibb.co/qnDKvd5/bomba.png" alt="bomba" onClick={() => handleClick(3)}></img>
        </div>
        <div className="container">
          <img className="minizdj" src="" alt="Tic_Tac_Toe" onClick={() => handleClick(4)}></img>
        </div>
        <div className="container">
          {/*<img className="minizdj" src="src/assets/gra5.png" alt="gra5"></img>*/}
        </div>
      </section>
      <main className={isMenuOpen ? 'menuOpen' : ''} >
        {message}
          <div className="menu">
            <img className="closeMenu" src="https://i.ibb.co/FnsQ9wN/close.png" alt="close" onClick={handleMenuClick}/>
            <div className="menuContent"><h2>Opcje</h2></div> {/* Add menu content */}
            <button className='changecolour' onClick={changeTheme}>Zmień kolor</button>
          </div>
        
      </main>
      <footer>
        <img className='zebatka' src="https://i.ibb.co/Dgy9jC2/zebatka.png" alt="zębatka" onClick={handleMenuClick}></img>
      </footer>
    </>
  )
}

export default App;
