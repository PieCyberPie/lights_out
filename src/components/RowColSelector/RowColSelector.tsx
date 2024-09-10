import { RowsColsProps } from "../../types/RowsColsProps";
import Selector from "../Selector/Selector";

const RowColSelector: React.FC<RowsColsProps> = ({
  rowsNum,
  setRowsNum,
  colsNum,
  setColsNum,
}) => {
  return (
    <div className="rowcolselector-container">
      <p>Number of rows:</p>
      <Selector num={rowsNum} stateChange={setRowsNum} />
      <p>Number of columns:</p>
      <Selector num={colsNum} stateChange={setColsNum} />
    </div>
  );
};

export default RowColSelector;
