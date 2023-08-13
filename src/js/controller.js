import Model from './model.js';
import View from './view.js';

export default class Controller {
  constructor(boardContainer) {
    this.boardContainer = boardContainer;
    // this.startButton = startButton;
    this.init();
  }

  init() {
    const startButton = document.querySelector('#Start-Button');
    // console.log(this.boardContainer);
    // console.log(this.startButton);
    if (startButton) {
      startButton.addEventListener('click', () => this.handleStartClick());
    } else {
      console.error('Start button element not found.');
    }
  }
  setGridSize(size) {
    this.boardContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    this.boardContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    this.boardContainer.style.setProperty('--board-size', size);
  }
  handleStartClick() {
    const boardSizeInput = document.querySelector('#Board-Size');
    const boardSize = parseInt(boardSizeInput.value);
    // console.log(boardSize);

    if (isNaN(boardSize) || boardSize < 3) {
      alert('Please enter a valid number greater than or equal to 3.');
    } else {
      this.setGridSize(boardSize);
      this.startGame(boardSize);
    }
    
  }

  startGame(boardSize) {
    this.model = new Model(boardSize);
    this.view = new View(boardSize, this.onCellClick.bind(this), this.boardContainer);
    this.view.createBoard();
    this.view.bindCellClickEvents();
  }

  onCellClick(index) {
    if (this.model.playMove(index)) {
      this.view.updateCell(index, this.model.board[index]);
      const winner = this.model.checkWin();
      if (winner) {
        this.view.showResult(winner);
        this.resetGame();
      } else if (this.model.isBoardFull()) {
        this.view.showResult('draw');
        this.resetGame();
      }
    }
  }

  resetGame() {
    this.model.reset();
    this.view.createBoard();
  }
}
