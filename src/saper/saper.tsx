import './saper.css';
import Saperr from './saper.js';

const Saper = () => {
    const handleClick = () => {
        Saperr();
      };
    return(
        <div>
            <div id="board"></div>
            <button id="start" onClick={handleClick}>Saper</button>
            <p id="timer">Time: 0</p>
            <p id="flagcount">Flags: 0</p>
            <p id="minecount">Mines: 0</p>
            <div id="btnnnbtn"><button id="btnnn">Restart</button></div>
        </div>
    );
}

export default Saper;