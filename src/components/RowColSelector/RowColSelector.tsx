import { RowsColsProps } from "../../types/RowsColsProps";

const RowColSelector: React.FC<RowsColsProps> = ({
  rowsNum,
  setRowsNum,
  colsNum,
  setColsNum,
}) => {
  return (
    <div>
      <input
        className="rows"
        type="number"
        min="1"
        max="10"
        value={rowsNum}
        onChange={(e) => {
          setRowsNum(parseInt(e.target.value));
        }}
        name="rows"
      />
      <input
        className="cols"
        type="number"
        min="1"
        max="10"
        value={colsNum}
        onChange={(e) => {
          setColsNum(parseInt(e.target.value));
        }}
        name="cols"
      />
    </div>
  );
};

export default RowColSelector;
