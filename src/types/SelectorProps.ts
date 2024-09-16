export interface SelectorProps {
  num: number;
  stateChange: React.Dispatch<React.SetStateAction<number>>;
  setMovesNum: React.Dispatch<React.SetStateAction<number>>;
  setRerender: React.Dispatch<React.SetStateAction<boolean>>;
}
