export default class View {
  constructor(boardSize, onCellClick, boardContainer) {
    this.boardSize = boardSize;
    this.onCellClick = onCellClick;
    this.container = boardContainer;
  }

  createBoard() {
    this.container.innerHTML = '';
    this.container.style.gridTemplateColumns = `repeat(${this.boardSize}, 100px)`;
    this.container.style.gridTemplateRows = `repeat(${this.boardSize}, 100px)`;

    for (let i = 0; i < this.boardSize * this.boardSize; i++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.setAttribute('data-cell', '');
      cell.addEventListener('click', () => this.onCellClick(i));
      this.container.appendChild(cell);
    }
  }

  updateCell(index, value) {
    const cell = this.container.children[index];
    cell.setAttribute('data-cell', value);
    cell.textContent = value;
  }

  showResult(result) {
    if (result === 'draw') {
      alert('It\'s a draw!');
    } else {
      alert(`Player ${result} wins!`);
    }
  }
}
