import './snake.css';


const Snake = () => {
    const SComp = () =>{

    }
    return(
        <div>
            <p id="points">Punkty: 0</p>
            <div className="cialo">
                <canvas width="400" height="400" id="game"></canvas>
                {SComp}
            </div>
        </div>
    );

};

export default Snake;