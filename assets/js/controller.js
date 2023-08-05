import Model from './model.js';
import View from './view.js';
export default class Controller {
  constructor(boardSize, boardContainer) {
    this.model = new Model(boardSize);
    this.view = new View(boardSize, this.onCellClick.bind(this), boardContainer);
    this.view.createBoard();
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
    this.model = new Model(this.model.size);
    this.view.createBoard();
  }
}
