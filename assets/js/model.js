
export default class Model {
    constructor() {
      this.board = ['', '', '', '', '', '', '', '', ''];
      this.currentPlayer = 'X';
    }
  
    checkWinner() {
      const winCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
      ];
  
      for (const combination of winCombinations) {
        const [a, b, c] = combination;
        if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
          return this.board[a];
        }
      }
  
      if (!this.board.includes('')) {
        return 'tie';
      }
  
      return null;
    }
  
    makeMove(index) {
      if (this.board[index] === '' && !this.checkWinner()) {
        this.board[index] = this.currentPlayer;
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
      }
    }
  
    isCellEmpty(index) {
      return this.board[index] === '';
    }
  
    isBoardFull() {
      return !this.board.includes('');
    }
  
    resetBoard() {
      this.board = ['', '', '', '', '', '', '', '', ''];
      this.currentPlayer = 'X';
    }
  }
  