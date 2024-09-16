export interface HeaderProps {
  rowsNum: number;
  setRowsNum: React.Dispatch<React.SetStateAction<number>>;
  colsNum: number;
  setColsNum: React.Dispatch<React.SetStateAction<number>>;
  rerender: boolean;
  setRerender: React.Dispatch<React.SetStateAction<boolean>>;
  movesNum: number;
  setMovesNum: React.Dispatch<React.SetStateAction<number>>;
}
