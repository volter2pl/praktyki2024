import './saper/saper.css';
import { Helmet } from 'react-helmet';

function Saper(){
    return(
        <div>
            <Helmet><script src='src/saper/saper.js'></script></Helmet>
            <div id="board"></div>
            <p id="timer">Czas: 0</p>
            <div id="btnnnbtn"><button id="btnnn">Restart</button></div>
        </div>
    );
}

export default Saper;