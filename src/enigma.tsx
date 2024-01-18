
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
        [' ', ' '],
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
    function Contener() {
        <>
        
            <h3>{koniec}</h3>
    
            <div className="Ang"></div>
            <div className="Gre"></div>
        </>

        const A= document.querySelector(".Ang");
        const G= document.querySelector(".Gre");
        
        for (let x = 0; x < letters.length; x++) {

            const Btt = document.createElement("button");
            Btt.setAttribute("className",'')
            Btt.innerText = letters[x][0];
            document.body.appendChild(Btt);

        } 
    }
    return (Contener)
    
}

export default Nig;