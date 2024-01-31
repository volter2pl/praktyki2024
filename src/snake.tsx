import './snake/snake.css';
import { Helmet } from 'react-helmet';

function Snake(){
    return(
        <div>
            <Helmet><script src='src/snake/snake.js'></script></Helmet>
            <p id="points">Punkty: 0</p>
            <div className="cialo">
                <canvas width="400" height="400" id="game"></canvas>

            </div>
        </div>
    );

}

export default Snake;