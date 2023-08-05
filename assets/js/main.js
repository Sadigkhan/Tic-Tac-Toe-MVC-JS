import Controller from './controller.js';

document.addEventListener('DOMContentLoaded', () => {
  const boardSizeInput = document.getElementById('Board-Size');
  const startButton = document.getElementById('Start-Button');
  const boardContainer = document.getElementById('Board');

  startButton.addEventListener('click', () => {
    const boardSize = parseInt(boardSizeInput.value);
    if (isNaN(boardSize) || boardSize < 3) {
      alert('Please enter a valid number greater than or equal to 3.');
    } else {
      const controller = new Controller(boardSize, boardContainer);
    }
  });
});


