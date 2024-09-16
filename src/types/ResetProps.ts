export interface ResetProps {
  setRerender: React.Dispatch<React.SetStateAction<boolean>>;
  setMovesNum: React.Dispatch<React.SetStateAction<number>>;
  setIsWin?: React.Dispatch<React.SetStateAction<boolean>>;
}
