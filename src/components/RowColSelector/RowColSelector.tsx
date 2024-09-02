import { RowsColsProps } from "../../types/RowsColsProps";

const RowColSelector: React.FC<RowsColsProps> = ({
  rowsNum,
  setRowsNum,
  colsNum,
  setColsNum,
}) => {
  return (
    <div className="selector-container">
      <label htmlFor="rows">Number of rows</label>
      <input
        name="rows"
        className="rows"
        type="number"
        min="1"
        max="10"
        value={rowsNum}
        onChange={(e) => {
          setRowsNum(parseInt(e.target.value));
        }}
      />
      <label htmlFor="cols">Number of columns</label>
      <input
        name="cols"
        className="cols"
        type="number"
        min="1"
        max="10"
        value={colsNum}
        onChange={(e) => {
          setColsNum(parseInt(e.target.value));
        }}
      />
    </div>
  );
};

export default RowColSelector;
