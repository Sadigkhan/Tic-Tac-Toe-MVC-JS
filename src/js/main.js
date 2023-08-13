import Controller from './controller.js';

document.addEventListener('DOMContentLoaded', () => {
  const boardContainer = document.getElementById('Board');
  const startButton = document.getElementById('Start-Button');
  const controller = new Controller(boardContainer,startButton);
});
