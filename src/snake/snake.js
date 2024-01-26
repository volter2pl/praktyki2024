var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var points = 0;
var grid = 16;
var count = 0;
  
var snake = {
  x: 160,
  y: 160,
  
  dx: grid,
  dy: 0,
  
  cells: [],
  
  maxCells: 4
};
var apple = {
  x: 320,
  y: 320
};


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// game loop
function loop() {
  requestAnimationFrame(loop);

  //Game speed
  if (++count < 6) {
  return;
  }

  count = 0;
  context.clearRect(0,0,canvas.width,canvas.height);

  //Snake
  snake.x += snake.dx;
  snake.y += snake.dy;

  if (snake.x < 0) {
    snake.x = canvas.width - grid;
  }
  else if (snake.x >= canvas.width) {
    snake.x = 0;
  }
  

  if (snake.y < 0) {
    snake.y = canvas.height - grid;
  }
  else if (snake.y >= canvas.height) {
    snake.y = 0;
  }

  snake.cells.unshift({x: snake.x, y: snake.y});

  if (snake.cells.length > snake.maxCells) {
    snake.cells.pop();
  }

   // Point counter

  //Apple and snake interaction
  context.fillStyle = 'red';
  context.fillRect(apple.x, apple.y, grid-1, grid-1);

  context.fillStyle = 'green';
  snake.cells.forEach(function(cell, index) {
    context.fillRect(cell.x, cell.y, grid-1, grid-1);  

    if (cell.x === apple.x && cell.y === apple.y) {
      snake.maxCells++;

      points++;
      document.getElementById("points").innerHTML = "Punkty " + points;
      apple.x = getRandomInt(0, 25) * grid;
      apple.y = getRandomInt(0, 25) * grid;
    }

    for (var i = index + 1; i < snake.cells.length; i++) {
      
      //Game Over
      if (cell.x === snake.cells[i].x && cell.y === snake.cells[i].y) {
        snake.x = 160;
        snake.y = 160;
        snake.cells = [];
        snake.maxCells = 4;
        snake.dx = grid;
        snake.dy = 0;

        apple.x = getRandomInt(0, 25) * grid;
        apple.y = getRandomInt(0, 25) * grid;

        points = 0; // Reset points
        document.getElementById("points").innerHTML = "Punkty " + points;
      }
    }
  });
  
  // Movement

document.addEventListener('keydown', function(e) {
  if (e.key === 'a' && snake.dx === 0) {
    snake.dx = -grid;
    snake.dy = 0;
  }

  else if (e.key === 'w' && snake.dy === 0) {
    snake.dy = -grid;
    snake.dx = 0;
  }

  else if (e.key === 'd' && snake.dx === 0) {
    snake.dx = grid;
    snake.dy = 0;
  }

  else if (e.key === 's' && snake.dy === 0) {
    snake.dy = grid;
    snake.dx = 0;
  }
});
}
requestAnimationFrame(loop);