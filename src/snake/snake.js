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

    var appleImage = new Image();
    appleImage.onload = function () {
      loop();
    };
    appleImage.src = 'src/assets/apple.png';

    var headImage = new Image();
    headImage.src = 'src/assets/snakehead.png';

    var bodyImage = new Image();
    bodyImage.src = 'src/assets/snakebody.png';

    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    function loop() {
      requestAnimationFrame(loop);

      if (++count < 6) {
        return;
      }

      count = 0;
      context.clearRect(0, 0, canvas.width, canvas.height);

      snake.x += snake.dx;
      snake.y += snake.dy;

      if (snake.x < 0) {
        snake.x = canvas.width - grid;
      } else if (snake.x >= canvas.width) {
        snake.x = 0;
      }

      if (snake.y < 0) {
        snake.y = canvas.height - grid;
      } else if (snake.y >= canvas.height) {
        snake.y = 0;
      }

      snake.cells.unshift({ x: snake.x, y: snake.y });

      if (snake.cells.length > snake.maxCells) {
        snake.cells.pop();
      }

      context.drawImage(appleImage, apple.x, apple.y, grid - 1, grid - 1);

      snake.cells.forEach(function(cell, index) {
        if (index === 0) {
            context.save();
            context.translate(cell.x + grid / 2, cell.y + grid / 2);
            // Calculate rotation angle based on direction
            if (snake.dx > 0) {
                context.rotate(0); // Right
            } else if (snake.dx < 0) {
                context.rotate(Math.PI); // Left
            } else if (snake.dy < 0) {
                context.rotate(-Math.PI / 2); // Up
            } else if (snake.dy > 0) {
                context.rotate(Math.PI / 2); // Down
            }
            context.drawImage(headImage, -grid / 2, -grid / 2, grid, grid);
            context.restore();
        } else {
            context.drawImage(bodyImage, cell.x, cell.y, grid, grid);
        }

        if (cell.x === apple.x && cell.y === apple.y) {
          snake.maxCells++;
          points++;
          document.getElementById("points").innerHTML = "Points: " + points;
          apple.x = getRandomInt(0, 25) * grid;
          apple.y = getRandomInt(0, 25) * grid;
        }

        for (var i = index + 1; i < snake.cells.length; i++) {
          if (cell.x === snake.cells[i].x && cell.y === snake.cells[i].y) {
            resetGame();
          }
        }
      });
    }

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