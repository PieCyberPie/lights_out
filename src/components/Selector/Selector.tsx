import { SelectorProps } from "../../types/SelectorProps";
import arrowUp from "../../assets/buttons/aUp.svg";
import arrowDown from "../../assets/buttons/aDown.svg";

const Selector: React.FC<SelectorProps> = ({
  num,
  stateChange,
  setMovesNum,
  setRerender,
}) => {
  return (
    <div className="selector-container">
      <img
        src={arrowUp}
        alt=""
        className="button"
        onClick={() => {
          if (num <= 6) {
            setRerender((rerender) => !rerender);
            setMovesNum(0);
            stateChange((num) => num + 1);
          }
        }}
      />
      <p className="numberOfRowCol">{num}</p>
      <img
        src={arrowDown}
        alt=""
        className="button"
        onClick={() => {
          if (num > 3) {
            setRerender((rerender) => !rerender);
            setMovesNum(0);
            stateChange((num) => num - 1);
          }
        }}
      />
    </div>
  );
};

export default Selector;
