import './App.css'
import { Helmet } from 'react-helmet';
import Statki from './statki/statki.tsx';
import Saper from './saper/saper.tsx';
import Snake from './snake/snake.tsx';
import Tic_Tac_Toe from './Tic_Tac_Toe.tsx';
import changeTheme from './Theme.tsx';
import Enig from './enigma.tsx';
import { useState } from 'react';
import statek from './assets/statek.jpg';
import waz from './assets/waz.jpg';
import bomba from './assets/bomba.jpg';
import tik from './assets/tik.png';
import enigma from './assets/enigma.jpg';


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
    if (gameId === 4){
      setMessage(<Tic_Tac_Toe />);
    }
    if (gameId === 5){
      setMessage(<Enig />);
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
      <Helmet>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"></link>
      <link href="https://fonts.googleapis.com/css2?family=Quantico:wght@700&display=swap" rel="stylesheet"></link>
      </Helmet>
        <h1 className='Logo' onClick={handleHeaderClick}>Gamezz Loader</h1>
      </header>
      <section>
        <div className="container">
          <img className="minizdj" src={statek} alt="statek" onClick={() => handleClick(1)} ></img>
        </div>
        <div className="container">
          <img className="minizdj" src={waz} alt="snake" onClick={() => handleClick(2)} ></img>
        </div>
        <div className="container">
          <img className="minizdj" src={bomba} alt="bomba" onClick={() => handleClick(3)}></img>
        </div>
        <div className="container">
          <img className="minizdj" src={tik} alt="koło" onClick={() => handleClick(4)}></img>
        </div>
        <div className="container">
        <img className="minizdj" src={enigma} alt="koło" onClick={() => handleClick(5)}></img>
        </div>
        
      </section>
      <main className={isMenuOpen ? 'menuOpen' : ''} >
        {message}
       
          <div className="menu">
            <img className="closeMenu" src="https://i.ibb.co/FnsQ9wN/close.png" alt="close" onClick={handleMenuClick}/>
            <div className="menuContent"><h2>Settings</h2></div> {/* Add menu content */}
            <button className='changecolour' onClick={changeTheme}>Change colour</button>
          </div>
      </main>
      <footer>
        <img className='zebatka' src="https://i.ibb.co/Dgy9jC2/zebatka.png" alt="zębatka" onClick={handleMenuClick}></img>
      </footer>
    </>
  )
}

export default App;
