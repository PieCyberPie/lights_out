export interface CellProps {
  row: number;
  col: number;
  setMovesNum: React.Dispatch<React.SetStateAction<number>>;
  rowsNum: number;
  color?: string;
}
