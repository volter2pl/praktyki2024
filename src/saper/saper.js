  const board = document.getElementById('board');
    let gameEnded = false;

    init();

    function init() {
      document.getElementById("btnnn").addEventListener("click", clearBoard);

      startTimer();

      const rows = 10;
      const cols = 10;
      const mines = 20;
      let mineLocations = [];

      board.innerHTML = '';

      while (mineLocations.length < mines) {
        const row = Math.floor(Math.random() * rows);
        const col = Math.floor(Math.random() * cols);
        const position = `${row}-${col}`;

        if (!mineLocations.includes(position)) {
          mineLocations.push(position);
        }
      }

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const cell = document.createElement('div');
          cell.className = 'cell hidden';
          cell.setAttribute('data-row', row);
          cell.setAttribute('data-col', col);
          cell.addEventListener('click', revealCell);
          cell.addEventListener('contextmenu', toggleFlag);

          board.appendChild(cell);
        }
      }

      mineLocations.forEach(position => {
        const [row, col] = position.split('-');
        const cell = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);
        cell.classList.add('mine');
      });

      function revealCell(event) {
        if (gameEnded) return;
        const cell = event.target;
        const row = parseInt(cell.getAttribute('data-row'));
        const col = parseInt(cell.getAttribute('data-col'));

        if (cell.classList.contains('hidden')) {
          if (cell.classList.contains('mine')) {
            revealMines();
            alert('Przegrałeś!');
            clearInterval(timerInt);
            gameEnded = true;
          } else {
            const mineCount = countAdjacentMines(row, col);
            cell.textContent = mineCount > 0 ? mineCount : '';
            cell.classList.remove('hidden');
            if (mineCount === 0) {
              revealNeighbors(row, col);
            }
            if (checkWin()) {
              alert('Wygrałeś!');
              clearInterval(timerInt);
              gameEnded = true;
            }
          }
        }
      }

      function toggleFlag(event) {
        event.preventDefault();
        if (gameEnded) return;
        const cell = event.target;
        if (cell.classList.contains('hidden')) {
          cell.classList.toggle('flagged');
        }
      }

      function countAdjacentMines(row, col) {
        let count = 0;
        for (let i = -1; i <= 1; i++) {
          for (let j = -1; j <= 1; j++) {
            const newRow = row + i;
            const newCol = col + j;
            if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
              const neighbor = document.querySelector(`[data-row="${newRow}"][data-col="${newCol}"]`);
              if (neighbor && neighbor.classList.contains('mine')) {
                count++;
              }
            }
          }
        }
        return count;
      }

      function revealNeighbors(row, col) {
        for (let i = -1; i <= 1; i++) {
          for (let j = -1; j <= 1; j++) {
            const newRow = row + i;
            const newCol = col + j;
            if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
              const neighbor = document.querySelector(`[data-row="${newRow}"][data-col="${newCol}"]`);
              if (neighbor && neighbor.classList.contains('hidden')) {
                revealCell({ target: neighbor });
              }
            }
          }
        }
      }

      function revealMines() {
        mineLocations.forEach(position => {
          const [row, col] = position.split('-');
          const mineCell = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);
          mineCell.classList.remove('hidden');
        });
      }

      function checkWin() {
        const hiddenCells = document.querySelectorAll('.cell.hidden:not(.mine)');
        return hiddenCells.length === 0;
      }
    }

    function startTimer() {
      Time = 1;
      timerInt = setInterval(function () {
        document.getElementById("timer").innerHTML = "Czas: " + Time;
        Time++;
      }, 1000);
    }

    function timerClear() {
      clearInterval(timerInt);
      document.getElementById("timer").innerHTML = "Czas: 0";
    }

    function clearBoard() {
      const cells = document.querySelectorAll('.cell');
      cells.forEach(cell => {
        cell.classList.add('hidden');
        cell.textContent = '';
      });
      timerClear();
      gameEnded = false;
      startTimer();
    }
