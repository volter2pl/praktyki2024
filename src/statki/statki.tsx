import './statki.css';
import Statkii from './statki.js';
function Statki() {
    const handleClick = () => {
        Statkii();
        const Play = document.querySelector(".StartGameDiv") as HTMLElement;
        Play.style.display = "none";
      };
    return (
        <div className='maindiv'>
            <div className="tlo">
                <div id="game-info">
                    <p>Turn: <span id="turn-display"></span></p>
                    <p>Info: <span id="info"></span></p>
                </div>

                <div id="gamesboard-container"></div>

                <div className="option-container">
                    <div id="0" className="destroyer-preview destroyer" draggable="true"></div>
                    <div id="1" className="submarine-preview submarine" draggable="true"></div>
                    <div id="2" className="cruiser-preview cruiser" draggable="true"></div>
                    <div id="3" className="battleship-preview battleship" draggable="true"></div>
                    <div id="4" className="carrier-preview carrier" draggable="true"></div>
                </div>

                <button id="flip-button">FLIP</button>
                <button id="start-button">START</button>
            </div>
            <div className='StartGameDiv'>
                <button className="StartGame" onClick={handleClick}>Play</button>
            </div>
        </div>
        
    );
}

export default Statki;