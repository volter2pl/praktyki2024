
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

var appleImage = new Image();
appleImage.src = 'src/assets/apple.png';

var headImage = new Image();
headImage.src = 'src/assets/snakehead.png'; // Path to the snake head image

var bodyImage = new Image();
bodyImage.src = 'src/assets/snakebody.png'; // Path to the snake body image

var rotation = 0; // Initial rotation angle

function loop() {
  requestAnimationFrame(loop);

  // Game speed
  if (++count < 6) {
    return;
  }

  count = 0;
  context.clearRect(0,0,canvas.width,canvas.height);

  snake.x += snake.dx;
  snake.y += snake.dy;

  if (snake.x < 0) {
    snake.x = canvas.width - grid;
  }
  else if (snake.x >= canvas.width) {
    snake.x = 0;

  }

  // game loop
  function loop() {
    requestAnimationFrame(loop);
  //
  //Game speed
    if (++count < 6) {
    return;
    }
  //
    count = 0;
    context.clearRect(0,0,canvas.width,canvas.height);

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


  // Draw apple image
  context.drawImage(appleImage, apple.x, apple.y, grid - 1, grid - 1);

  snake.cells.forEach(function(cell, index) {
    context.save(); // Save the current transformation state

    if (index === 0) {
        // Calculate rotation angle based on direction
        if (snake.dx > 0) {
            rotation = 0; // Right
        } else if (snake.dx < 0) {
            rotation = Math.PI; // Left
        } else if (snake.dy < 0) {
            rotation = -Math.PI / 2; // Up
        } else if (snake.dy > 0) {
            rotation = Math.PI / 2; // Down
        }

        // Draw and rotate snake head image
        context.translate(cell.x + grid / 2, cell.y + grid / 2);
        context.rotate(rotation);
        context.drawImage(headImage, -grid / 2, -grid / 2, grid - 1, grid - 1);
    } else {
        // Draw and rotate snake body image
        context.translate(cell.x + grid / 2, cell.y + grid / 2);
        context.rotate(rotation);
        context.drawImage(bodyImage, -grid / 2, -grid / 2, grid - 1, grid - 1);
    }

    context.restore();


    context.fillStyle = 'red';
    context.fillRect(apple.x, apple.y, grid-1, grid-1);


      points++;
      document.getElementById("points").innerHTML = "Punkty: " + points;
      apple.x = getRandomInt(0, 25) * grid;
      apple.y = getRandomInt(0, 25) * grid;
    }

    for (var i = index + 1; i < snake.cells.length; i++) {
      if (cell.x === snake.cells[i].x && cell.y === snake.cells[i].y) {
        snake.x = 160;
        snake.y = 160;
        snake.cells = [];
        snake.maxCells = 4;
        snake.dx = grid;
        snake.dy = 0;


        points++;
        document.getElementById("points").innerHTML = "Punkty " + points;
        apple.x = getRandomInt(0, 25) * grid;
        apple.y = getRandomInt(0, 25) * grid;
      }
    }
});


      for (var i = index + 1; i < snake.cells.length; i++) {
        
        if (cell.x === snake.cells[i].x && cell.y === snake.cells[i].y) {
          snake.x = 160;
          snake.y = 160;
          snake.cells = [];
          snake.maxCells = 4;
          snake.dx = grid;
          snake.dy = 0;

          apple.x = getRandomInt(0, 25) * grid;
          apple.y = getRandomInt(0, 25) * grid;

          points = 0;
          document.getElementById("points").innerHTML = "Punkty " + points;
        }
      }
    });


  

document.addEventListener('keydown', function(e) {
  if (e.key === 'a' || e.which === 37 && snake.dx === 0) {
    snake.dx = -grid;
    snake.dy = 0;
  }

  else if (e.key === 'w' || e.which === 38 && snake.dy === 0) {
    snake.dy = -grid;
    snake.dx = 0;
  }

  else if (e.key === 'd' || e.which === 39 && snake.dx === 0) {
    snake.dx = grid;
    snake.dy = 0;
  }

  else if (e.key === 's' || e.which === 40 && snake.dy === 0) {
    snake.dy = grid;
    snake.dx = 0;

  }
  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);

