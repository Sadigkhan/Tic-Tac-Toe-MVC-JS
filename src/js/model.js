export default class Model {
  constructor(size) {
    this.size = size;
    this.board = new Array(size * size).fill(null);
    this.currentPlayer = 'X';
  }

  playMove(index) {
    if (this.board[index] === null) {
      this.board[index] = this.currentPlayer;
      this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
      return true;
    }
    return false;
  }

  checkWin() {
    const winningCombinations = this.getWinningCombinations();
    
    for (const combination of winningCombinations) {
      const [cell1, cell2, cell3] = combination;
      if (this.board[cell1] && this.board[cell1] === this.board[cell2] && this.board[cell1] === this.board[cell3]) {
        return this.board[cell1];
      }
    }

    return null;
  }

  isBoardFull() {
    return this.board.every(cell => cell !== null);
  }

  reset() {
    this.board = new Array(this.size * this.size).fill(null);
    this.currentPlayer = 'X';
  }

  getWinningCombinations() {
    const combinations = [];

    // Rows
    for (let i = 0; i < this.size; i++) {
      for (let j = 0; j <= this.size - 3; j++) {
        combinations.push([i * this.size + j, i * this.size + j + 1, i * this.size + j + 2]);
      }
    }

    // Columns
    for (let i = 0; i < this.size; i++) {
      for (let j = 0; j <= this.size - 3; j++) {
        combinations.push([j * this.size + i, (j + 1) * this.size + i, (j + 2) * this.size + i]);
      }
    }

    // Diagonals
    for (let i = 0; i <= this.size - 3; i++) {
      for (let j = 0; j <= this.size - 3; j++) {
        combinations.push([i * this.size + j, (i + 1) * this.size + j + 1, (i + 2) * this.size + j + 2]);
        combinations.push([i * this.size + j + 2, (i + 1) * this.size + j + 1, (i + 2) * this.size + j]);
      }
    }

    return combinations;
  }
}
