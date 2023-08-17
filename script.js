document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById('startButton');
    const restartButton = document.getElementById('restartButton');
    const timeDisplay = document.getElementById('timeDisplay');
    let timerInterval, startTime = 0, elapsedTime = 0, isRunning = false;

    const updateDisplay = () => timeDisplay.textContent = new Date(elapsedTime * 1000).toISOString().substr(11, 8);

    const toggleTimer = () => {
      if (!isRunning) {
        isRunning = true;
        if (startButton.textContent === 'Start') {
          startButton.textContent = 'Pause';
          startButton.style.backgroundColor = 'violet';
        } else {
          startButton.textContent = 'Resume';
          startButton.style.backgroundColor = 'red';
        }
        restartButton.disabled = true;
        timerInterval = setInterval(() => {
          elapsedTime = Math.floor((Date.now() - startTime) / 1000);
          updateDisplay();
        }, 1000);
      } else {
        isRunning = false;
        clearInterval(timerInterval);
        startButton.textContent = 'Resume';
        startButton.style.backgroundColor = 'red';
        restartButton.disabled = false;
      }
    };

    startButton.addEventListener('click', toggleTimer);
    restartButton.addEventListener('click', () => {
      isRunning = false;
      clearInterval(timerInterval);
      elapsedTime = 0;
      updateDisplay();
      startButton.textContent = 'Start';
      startButton.style.backgroundColor = '';
    });
  });