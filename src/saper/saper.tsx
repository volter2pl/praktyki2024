import './saper.css';
import Saperr from './saper.js';

const Saper = () => {

    const handleClick = () => {
        Saperr();
        const Play = document.querySelector(".StartGame") as HTMLElement;
        Play.style.display = "none";
      };
    return(
        <div>
            <div className='StartGameDivv'><button onClick={handleClick} className='StartGame'>Start</button></div>
            <div>
                <div>
                    <div id="board"></div>
                </div>
                <div className='boardAddons'>
                    <p id="timer">Time: 0</p>
                    <p id="flagcount">Flags: 0</p>
                    <p id="minecount">Mines: 0</p>
                    <div id="btnnnbtn"><button id="btnnn">Restart</button></div>
                </div>
            </div>
        </div>
    );
}

export default Saper;