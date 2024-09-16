import { ResetProps } from "../../types/ResetProps";

const Reset: React.FC<ResetProps> = ({
  setRerender,
  setMovesNum,
  setIsWin,
}) => (
  <button
    className="reset"
    onClick={() => {
      setRerender((rerender) => !rerender);
      setMovesNum(0);
      if (setIsWin) {
        setIsWin(false);
      }
    }}
  >
    reset
  </button>
);

export default Reset;
