import { useState, useEffect } from 'react';
import './enigma.css';

function Enig() {
    const [isGameStarted, setIsGameStarted] = useState(false);
    const [clickedAngValue, setClickedAngValue] = useState<string | null>(null);
    const [clickedGreValue, setClickedGreValue] = useState<string | null>(null);
    const [lastClicked, setLastClicked] = useState<string | null>(null);
    const [prevLastClicked, setPrevLastClicked] = useState<string | null>(null);
    const [koniec, setKoniec] = useState<string>("");
    const [clickCount, setClickCount] = useState<number>(0);
    const [shuffledGreButtons, setShuffledGreButtons] = useState<JSX.Element[]>([]);
    clickedAngValue
    clickedGreValue
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
        ['A', '⾼'],
        ['B', '⾽'],
        ['C', '⾾'],
        ['D', '⾿'],
        ['E', '⿀'],
        ['F', '⿁'],
        ['G', '⿂'],
        ['H', '⿃'],
        ['I', '⿄'],
        ['J', '⿅'],
        ['K', '⿆'],
        ['L', '⿇'],
        ['M', '⿈'],
        ['N', '⿉'],
        ['O', '⿊'],
        ['P', '⿋'],
        ['Q', '⿌'],
        ['R', '⿍'],
        ['S', '⿎'],
        ['T', '⿏'],
        ['U', '⿐'],
        ['V', '⿑'],
        ['W', '⿒'],
        ['X', '⿓'],
        ['Y', '⿔'],
        ['Z', '⿕']
    ];

    useEffect(() => {
        if (isGameStarted) {
            const wylosowane = cytaty[Math.floor(Math.random() * 10)].toUpperCase();
            let koniecTmp = "";
            for (let i = 0; i < wylosowane.length; i++) {
                const letter = wylosowane[i];
                const foundLetter = letters.find(item => item[0] === letter);
                if (foundLetter) {
                    koniecTmp += foundLetter[1];
                } else {
                    koniecTmp += letter;
                }
            }
            setKoniec(koniecTmp);
        }
    }, [isGameStarted]);

    const startGame = () => {
        setIsGameStarted(true);
    };

    const handleClick = (letter: string, isAngSection: boolean) => {
        if (isAngSection) {
            setClickedAngValue(letter);
        } else {
            setClickedGreValue(letter);
        }

        setPrevLastClicked(lastClicked); 
        setLastClicked(letter);

        setClickCount((prevCount) => prevCount + 1);
    };

    useEffect(() => {
        if (clickCount === 2) {
            let replacedKoniec = koniec;
            if (prevLastClicked) {
                const regex = new RegExp(prevLastClicked, 'g');
                replacedKoniec = replacedKoniec.replace(regex, lastClicked || '');
            }
            setKoniec(replacedKoniec);

            setClickCount(0);
            setLastClicked(null);
            setPrevLastClicked(null);
        }
    }, [clickCount, koniec, lastClicked, prevLastClicked]);

    useEffect(() => {
        if (koniec === cytaty[0].toUpperCase() || koniec === cytaty[1].toUpperCase() || koniec === cytaty[2].toUpperCase() || koniec === cytaty[3].toUpperCase() || koniec === cytaty[4].toUpperCase() || koniec === cytaty[5].toUpperCase() || koniec === cytaty[6].toUpperCase() || koniec === cytaty[7].toUpperCase() || koniec === cytaty[8].toUpperCase() || koniec === cytaty[9].toUpperCase()) {
            alert('You won!');
        }
    }, [koniec]);

    useEffect(() => {
        if (isGameStarted) {
            const shuffledButtons2 = buttons2.sort(() => Math.random() - 0.5);
            setShuffledGreButtons(shuffledButtons2);
        }
    }, [isGameStarted]);

    // Tworzymy tablicę przycisków dla sekcji Ang
    const buttons = letters.map((letter) => (
        <div
            key={letter[0]}
            id='butt1'
            className={`L_buttons ${lastClicked === letter[0] ? 'clicked' : ''}`}
            onClick={() => handleClick(letter[0], true)}
        >
            {letter[0]}
        </div>
    ));

    // Tworzymy tablicę przycisków dla sekcji Gre
    const buttons2 = letters.map((letter) => (
        <div
            key={letter[1]}
            id='butt2'
            className={`L_buttons ${lastClicked === letter[1] ? 'clicked' : ''}`}
            onClick={() => handleClick(letter[1], false)}
        >
            {letter[1]}
        </div>
    ));

    return (
        <>
            {!isGameStarted ? (
                <div className="StartGame" onClick={startGame}>
                    Play
                </div>
            ) : (
                <div className="Enigma_D">
                    <h1 className="Sifer">{koniec}</h1>
                    <div className="Ang">{buttons}</div>
                    <div className="Gre">{shuffledGreButtons}</div>
                </div>
            )}
        </>
    );
}

export default Enig;
