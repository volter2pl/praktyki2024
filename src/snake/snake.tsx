import './snake.css';
import SnakeG from './snake.js'

const Snake = () => {
    return(
        <div>
            <p id="points">Punkty: 0</p>
            <div className="cialo">
                <canvas width="400" height="400" id="game"></canvas>
                {SnakeG()}
            </div>
        </div>
    );

};

export default Snake;