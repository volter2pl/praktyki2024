import './snake.css';
<<<<<<< HEAD
<<<<<<< HEAD
import snake from '../snake/snake.js'; 
import resetGame from '../snake/snake.js'; 
import React, { useEffect } from 'react';


const Snake = () => {
    useEffect(() => {
       snake;
       resetGame();
      }, []);
=======
import SnakeG from './snake.js'
=======
import SnakeG from './snake.js';
>>>>>>> 24bbd229c8f82df51bda5167ae5e10e3506b8b79

const Snake = () => {
    const handleClick = () => {
        SnakeG();
        const Play = document.querySelector(".StartGame") as HTMLElement;
        Play.style.display = "none";
        
      };
>>>>>>> c27854d05d36395c2e61962084e1ef893bdd4ec5
    return(
        <div>
            <p id="points">Punkty: 0</p>
            <div className="cialo">
                <canvas width="400" height="400" id="game"></canvas>
<<<<<<< HEAD
=======
                <button onClick={handleClick} className='StartGame'>Play</button>
>>>>>>> c27854d05d36395c2e61962084e1ef893bdd4ec5
            </div>
        </div>
    );

};

export default Snake;