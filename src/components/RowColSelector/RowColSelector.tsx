import { RowsColsProps } from "../../types/RowsColsProps";
import Selector from "../Selector/Selector";

const RowColSelector: React.FC<RowsColsProps> = ({
  rowsNum,
  setRowsNum,
  colsNum,
  setColsNum,
  setRerender,
  setMovesNum,
}) => {
  return (
    <div className="rowcolselector-container">
      <p>Number of rows:</p>
      <Selector
        num={rowsNum}
        stateChange={setRowsNum}
        setMovesNum={setMovesNum}
        setRerender={setRerender}
      />
      <p>Number of columns:</p>
      <Selector
        num={colsNum}
        stateChange={setColsNum}
        setMovesNum={setMovesNum}
        setRerender={setRerender}
      />
    </div>
  );
};

export default RowColSelector;
