import './snake.css';
import snakeG from './snake'


function Snake() {
   
    const snakeGame = () => {
        return snakeG();
    }

    return (
        <div>
            <p id="points">Punkty: 0</p>
                <div className="cialo">
                    <canvas width="400" height="400" id="game"></canvas>
                    {snakeGame()}
                </div>
            </div>
    )
}
export default Snake;