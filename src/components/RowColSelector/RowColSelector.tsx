import { RowsColsProps } from "../../types/RowsColsProps";
import Selector from "../Selector/Selector";

const RowColSelector: React.FC<RowsColsProps> = ({
  rowsNum,
  setRowsNum,
  colsNum,
  setColsNum,
  setMovesNum,
}) => {
  return (
    <div className="rowcolselector-container">
      <p>Number of rows:</p>
      <Selector
        num={rowsNum}
        stateChange={setRowsNum}
        setMovesNum={setMovesNum}
      />
      <p>Number of columns:</p>
      <Selector
        num={colsNum}
        stateChange={setColsNum}
        setMovesNum={setMovesNum}
      />
    </div>
  );
};

export default RowColSelector;
