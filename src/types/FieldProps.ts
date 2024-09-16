export interface FieldProps {
  rowsNum: number;
  colsNum: number;
  movesNum: number;
  setMovesNum: React.Dispatch<React.SetStateAction<number>>;
  rerender: boolean;
}
