import './enigma.css'

function Nig() {
    const cytaty = [
        "Knowing yourself is the beginning of all wisdom",
        "It is the mark of an educated mind to be able to entertain a thought without accepting it",
        "Patience is bitter but its fruit is sweet",
        "Without friends no one would want to live even if he had all other goods",
        "It is during our darkest moments that we must focus to see the light",
        "Sonata fortepianowa autorstwa Ludwig van Beethoven",
        "Democracy basically means of the people for the people by the people But the people are Retarded",
        "Hello there",
        "I love democracy",
        "Never gonna give you up Never gonna let you down Never gonna run around and desert you Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you"
    ];
    const letters: string[][] = [
        ['A', 'Α'],
        ['B', 'β'],
        ['C', 'Γ'],
        ['D', 'Δ'],
        ['E', 'Ε'],
        ['F', 'Φ'],
        ['G', 'Γ'],
        ['H', 'Η'],
        ['I', 'Ι'],
        ['J', 'Ξ'],
        ['K', 'Κ'],
        ['L', 'Λ'],
        ['M', 'Μ'],
        ['N', 'Ν'],
        ['O', 'Ο'],
        ['P', 'Π'],
        ['Q', 'Θ'],
        ['R', 'Ρ'],
        ['S', 'Σ'],
        ['T', 'Τ'],
        ['U', 'Υ'],
        ['V', 'Ω'],
        ['W', 'Ω'],
        ['X', 'Χ'],
        ['Y', 'Υ'],
        ['Z', 'Ζ']
    ];
    function losujLiczbeOd1Do10(): number {
        return Math.floor(Math.random() * 10);
    }
    let wylosowane : string= cytaty[losujLiczbeOd1Do10()];
    wylosowane = wylosowane.toUpperCase();
    let koniec: string = "";
    for (let i = 0; i < wylosowane.length; i++) {
        const letter = wylosowane[i];
        const foundLetter = letters.find(item => item[0] === letter);
        if (foundLetter) {
            koniec += foundLetter[1];
        } else {
            koniec += letter;
        }
}
        let i:number = 0;
        const buttons = letters.map((letter) => (
           
            <button key={letter[0]} id={String(i++)} className="L_buttons">{letter[0]}</button>
        ));
        let j:number = 0;
        const buttons2 = letters.map((letter) => (
            <button key={letter[1]} id={String(j++)} className="L_buttons">{letter[1]}</button>
        ));
        
        /*
        const letter1 = document.querySelector('#butt1');
        
        function save1(){
            const a:string = letter1.innerHTML;
            console.log(a)
        }
        function zapis1() {
            if (document.getElementById('butt1')?.onclick) {
                const x = document.getElementById('butt1')?.innerHTML;
                console.log(x);
            }
        }*/
        
        return (
            <>
                <div className="Enigma_D">
                    <h1 className="Sifer">{koniec}</h1>
                    <div className="Ang">
                    {buttons}
                    
                    </div>
                  <div className="Gre">
                    {buttons2}
                    </div>
                </div> 
            </>
        );
}

export default Nig;