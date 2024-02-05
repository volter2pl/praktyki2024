import './snake.css';
import SnakeG from './snake.js'

const Snake = () => {
    const handleClick = () => {
        SnakeG();
        const Play = document.querySelector(".StartGameDiv") as HTMLElement;
        Play.style.display = "none";
        
      };
    return(
        <div className='maindiv'>
            <div>
                <p id="points">Punkty: 0</p>
                <div className="cialo">
                    <canvas width="400" height="400" id="game"></canvas>
                </div>
            </div>
            <div className='StartGameDiv'>
                <button onClick={handleClick} className='StartGame'>Play</button>
            </div>
        </div>
    );

};

export default Snake;