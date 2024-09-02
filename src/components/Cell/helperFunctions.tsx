function toggleCell(cell: HTMLElement): void {
  cell.classList.toggle("cell--dark");
  cell.classList.toggle("cell--light");
}

function toggleAdjacentCells(cell: HTMLElement): void {
  const targetRow = parseInt(cell.dataset.row || "", 10);
  const targetCol = parseInt(cell.dataset.col || "", 10);
  const directions = [
    { row: -1, col: 0 }, // top
    { row: 1, col: 0 }, // bottom
    { row: 0, col: -1 }, // left
    { row: 0, col: 1 }, // right
  ];

  directions.forEach((direction) => {
    const adjacentRow = targetRow + direction.row;
    const adjacentCol = targetCol + direction.col;
    const adjacentCell = document.querySelector(
      `.cell[data-row="${adjacentRow}"][data-col="${adjacentCol}"]`
    );

    if (adjacentCell) {
      toggleCell(adjacentCell as HTMLElement);
    }
  });
}

export const makeMove = (targetCell: HTMLElement) => {
  toggleCell(targetCell);
  toggleAdjacentCells(targetCell);
};
