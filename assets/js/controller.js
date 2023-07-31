

export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.view.init(this.handleCellClick.bind(this));
  }

  handleCellClick(index) {
    if (this.model.isCellEmpty(index) && !this.model.checkWinner()) {
      this.model.makeMove(index);
      this.view.displayBoard(this.model.board);

      const winner = this.model.checkWinner();
      if (winner) {
        setTimeout(() => {
          alert(winner === 'tie' ? "It's a tie!" : `${winner} wins!`);
          this.model.resetBoard();
          this.view.displayBoard(this.model.board);
        }, 100);
      } else if (this.model.isBoardFull()) {
        setTimeout(() => {
          alert("It's a tie!");
          this.model.resetBoard();
          this.view.displayBoard(this.model.board);
        }, 100);
      }
    }
  }
}