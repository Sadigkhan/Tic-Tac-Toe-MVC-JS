
export default class View {
  constructor() {
    this.cells = document.querySelectorAll('[data-cell]');
  }

  displayBoard(board) {
    this.cells.forEach((cell, index) => {
      cell.textContent = board[index];
    });
  }

  bindCellClick(handler) {
    this.cells.forEach((cell, index) => {
      cell.addEventListener('click', () => {
        handler(index);
      });
    });
  }

  init(handler) {
    this.displayBoard(['', '', '', '', '', '', '', '', '']); 
    this.bindCellClick(handler);
  }
}
  