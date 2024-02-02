import './circle.css';
import TTTG from './circle.js'


function Tic_Tac_Toe() {
    const handleClick = () => {
        TTTG();
        const Play = document.querySelector(".StartGame") as HTMLElement;
        Play.style.display = "none";
        
      };
    return (
        <div id="home">
            <button onClick={handleClick} className='StartGame'>Play</button>
        </div>
    )

}
export default Tic_Tac_Toe;