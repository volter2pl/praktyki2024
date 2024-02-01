import './snake.css';
import snake from '../snake/snake.js'; 
import resetGame from '../snake/snake.js'; 
import React, { useEffect } from 'react';


const Snake = () => {
    useEffect(() => {
       snake;
       resetGame();
      }, []);
    return(
        <div>
            <p id="points">Punkty: 0</p>
            <div className="cialo">
                <canvas width="400" height="400" id="game"></canvas>
            </div>
        </div>
    );

};

export default Snake;