import './snake/snake.css';
import { Helmet } from 'react-helmet';
function Snake() {
    return (
        <div>
            <Helmet><script src='src/snake/snake.js'></script></Helmet>

            <div className="cialo">
                <canvas width="400" height="400" id="game"></canvas>
                    <script src="snake.js"></script>
            </div>
            </div>
    )

}
export default Snake;