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

  reset() {
    this.board = new Array(this.size * this.size).fill(null);
    this.currentPlayer = 'X';
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
  
    // Diagonal combinations
    for (let i = 0; i <= this.size - this.size; i++) {
      for (let j = 0; j <= this.size - this.size; j++) {
        const mainDiagonalCombination = [];
        const antiDiagonalCombination = [];
        for (let k = 0; k < this.size; k++) {
          mainDiagonalCombination.push((i + k) * this.size + j + k);
          antiDiagonalCombination.push((i + k) * this.size + (this.size - j - 1 - k));
        }
        combinations.push(mainDiagonalCombination);
        combinations.push(antiDiagonalCombination);
      }
    }
  
    return combinations;
  }
}
