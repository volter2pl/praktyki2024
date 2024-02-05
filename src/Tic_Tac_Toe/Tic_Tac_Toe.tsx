import './circle.css';
import tttg from './circle'


function Tic_Tac_Toe() {
    const handleClick = () => {
        tttg();
        const Play = document.querySelector(".StartGame") as HTMLElement;
        Play.style.display = "none";
        
      };
    return (
        <div id="home">
            <button onClick={handleClick} id="starttictactoe" className='StartGame'>Play</button>
        </div>
    )
}
export default Tic_Tac_Toe;