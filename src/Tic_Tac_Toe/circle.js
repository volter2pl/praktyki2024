let home = document.getElementById('home')
let board = document.createElement('div')
board.classList.add('board')
let playerturn = document.createElement('h4')
playerturn.classList.add('player-turn')
playerturn.textContent = 'Player1 move'
home.append(playerturn)

for (let i=1;i<10;i++) {
    let box = document.createElement('div')
    box.classList.add('box')
    box.value = 'true'
    box.id = i
    board.append(box)
}

home.append(board)

let player1moves = []
let player2moves = []

function updateboxes(playermoves) {
    if (playermoves==player1moves) {

        console.log('player 1 wins')
        const boxes = document.querySelectorAll('.box');
        boxes.forEach(box => {
            box.classList.remove('clickable')
            box.value = 'false'
        })
        let winner = document.createElement('h3')
        winner.classList.add('animate')
        button.classList.add('animateb')
        playerturn.textContent = 'Match ends'
        winner.textContent ='Winner: Player1'
        home.append(winner)

    }

    if (playermoves==player2moves) {
        console.log('player 2 wins')
        const boxes = document.querySelectorAll('.box');
        boxes.forEach(box => {
            box.classList.remove('clickable')
            box.value = 'false'
        })
        let winner = document.createElement('h3')
        winner.classList.add('animate')
        button.classList.add('animateb')
        playerturn.textContent = 'Match ends'
        winner.textContent ='Winner: Player2'
        home.append(winner)
}

}

function checkwinner(playermoves){
    if (playermoves.length>=3) {
        'sortowanie list'
        console.log(playermoves.sort(function(a,b){return a-b}))

        'warunki list'
        for (x in playermoves) {
            '1/2/3  6'
            '4/5/6  15'
            '7/8/9  24'
            if ((playermoves.includes(playermoves[x]+1)) && (playermoves.includes(playermoves[x]+2)) && ( ((playermoves[x]+(playermoves[x]+1)+(playermoves[x]+2))==6) || ((playermoves[x]+(playermoves[x]+1)+(playermoves[x]+2))==15) || ((playermoves[x]+(playermoves[x]+1)+(playermoves[x]+2))==24))) {
                updateboxes(playermoves)
                break

            }
            '1/4/7'
            '2/5/8'
            '3/6/9'
            if ((playermoves.includes(playermoves[x]+3)) && (playermoves.includes(playermoves[x]+6))) {
                updateboxes(playermoves)
                break

            }
            '1/5/9'
            if ((playermoves.includes(playermoves[x]+4)) && (playermoves.includes(playermoves[x]+8))) {
                updateboxes(playermoves)
                break

            }
            '3/5/7'
            if ((playermoves.includes(3)) && (playermoves.includes(5)) && (playermoves.includes(7))) {
                updateboxes(playermoves)
                break

            }
            
            
        }
        const check = document.querySelectorAll('.clickable')
        if (check.length==0 && x == 4) {
                let winner = document.createElement('h3')
                winner.classList.add('animate')
                button.classList.add('animateb')
                winner.textContent ='Remis'
                playerturn.textContent = 'Match ends'
                home.append(winner)
                
            }
      
    }
    
}

function draw(nspan1,nspan2,id) {
    const thixBox = document.getElementById(parseInt(id))
    let spanBox = document.createElement('div')
    spanBox.classList.add('tongue')
    let span1 = document.createElement('span')
    span1.classList.add(nspan1)
    let span2 = document.createElement('span')
    span2.classList.add(nspan2)
    spanBox.append(span1)
    spanBox.append(span2)
    thixBox.append(spanBox)
}


const boxes = document.querySelectorAll('.box')
boxes.forEach(box => {
    box.classList.add('clickable')
})

'player number'
let player = 1

'check if clickable and change value&class'
const clickableboxes = document.querySelectorAll('.clickable')

clickableboxes.forEach(cbox => {
    cbox.addEventListener('click',(check) => {
        let ehe = check.target.value;

        if (ehe == 'true') {
            cbox.value = 'false'

            for (player;player<10;) {
                if (player%2==0) {
                    cbox.classList.add('player2')
                    player +=1
                    player2moves.push(parseInt(cbox.id))
                    cbox.classList.remove('clickable')
                    draw('p2span1','p2span2',cbox.id)
                    playerturn.textContent = 'Player1 move'
                    checkwinner(player2moves)

                    break
                }

                if (player%2==1) {
                    cbox.classList.add('player1')
                    player +=1
                    player1moves.push(parseInt(cbox.id))
                    cbox.classList.remove('clickable')
                    playerturn.textContent = 'Player2 move'
                    checkwinner(player1moves)
                    draw('p1span1','p1span2',cbox.id)
                    break
                }
                
            }
        }
        else {
            console.log('serio?')
        }
        cbox.classList.remove('clickable')
    })
})
function resetGame() {
    player1moves = [];
    player2moves = [];
    player = 1;

    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.classList.remove('player1', 'player2', 'clickable');
        box.value = 'true';
        box.innerHTML = ''; // Remove any content within the box, such as spans
    });

    const winner = document.querySelector('.animate');
    if (winner) {
        winner.remove(); // Remove the winner message if it exists
    }

    playerturn.textContent = 'Player1 move';
}
    let page = document.getElementById('home')
    let button = document.createElement('button')
    button.textContent = 'Restart'
    button.classList.add('restart-button')
    button.addEventListener('click', () => {
        resetGame();
    });
    page.append(button);