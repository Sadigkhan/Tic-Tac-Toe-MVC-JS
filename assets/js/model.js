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
      let sameSymbols = true;
      const firstSymbol = this.board[combination[0]];
      for (const index of combination) {
        if (!this.board[index] || this.board[index] !== firstSymbol) {
          sameSymbols = false;
          break;
        }
      }
      if (sameSymbols) {
        return firstSymbol;
      }
    }
    return null;
  }

  isBoardFull() {
    return this.board.every(cell => cell !== null);
  }

  getWinningCombinations() {
    const combinations = [];

    // Row combinations
    for (let i = 0; i < this.size; i++) {
      for (let j = 0; j <= this.size - this.size; j++) {
        const rowCombination = [];
        for (let k = 0; k < this.size; k++) {
          rowCombination.push(i * this.size + j + k);
        }
        combinations.push(rowCombination);
      }
    }

    // Column combinations
    for (let i = 0; i < this.size; i++) {
      for (let j = 0; j <= this.size - this.size; j++) {
        const columnCombination = [];
        for (let k = 0; k < this.size; k++) {
          columnCombination.push((j + k) * this.size + i);
        }
        combinations.push(columnCombination);
      }
    }

    // Main diagonal
    for (let i = 0; i <= this.size - this.size; i++) {
      for (let j = 0; j <= this.size - this.size; j++) {
        const mainDiagonalCombination = [];
        for (let k = 0; k < this.size; k++) {
          mainDiagonalCombination.push((i + k) * this.size + j + k);
        }
        combinations.push(mainDiagonalCombination);
      }
    }

    // Anti-diagonal
    for (let i = 0; i <= this.size - this.size; i++) {
      for (let j = this.size - 1; j >= this.size - this.size; j--) {
        const antiDiagonalCombination = [];
        for (let k = 0; k < this.size; k++) {
          antiDiagonalCombination.push((i + k) * this.size + j - k);
        }
        combinations.push(antiDiagonalCombination);
      }
    }
    // console.log(combinations);
    return combinations;
  }
}
