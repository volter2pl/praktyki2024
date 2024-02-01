const SnakeG = () =>{

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
 const canvas = document.getElementById('game');
 const context = canvas.getContext('2d');
 let points = 0;
 const grid = 16;
 let count = 0;

const snake = {
  x: 160,
  y: 160,

  dx: grid,
  dy: 0,

  cells: [],

  maxCells: 4
};

const apple = {
  x: 320,
  y: 320
};

// reszta kodu bez zmian

function resetGame() {
  snake.x = 160;
  snake.y = 160;
  snake.cells = [];
  snake.maxCells = 4;
  snake.dx = grid;
  snake.dy = 0;

  apple.x = getRandomInt(0, 25) * grid;
  apple.y = getRandomInt(0, 25) * grid;

  points = 0;
  document.getElementById("points").innerHTML = "Points: " + points;
}

// reszta kodu bez zmian

document.addEventListener('keydown', function (e) {
  if (e.key === 'a' && snake.dx === 0 || e.which === 37 && snake.dx === 0) {
    snake.dx = -grid;
    snake.dy = 0;
  } else if (e.key === 'w' && snake.dy === 0 || e.which === 38 && snake.dy === 0) {
    snake.dy = -grid;
    snake.dx = 0;
  } else if (e.key === 'd' && snake.dx === 0 || e.which === 39 && snake.dx === 0) {
    snake.dx = grid;
    snake.dy = 0;
  } else if (e.key === 's' && snake.dy === 0 || e.which === 40 && snake.dy === 0) {
    snake.dy = grid;
    snake.dx = 0;
  }
});
}
export default SnakeG;