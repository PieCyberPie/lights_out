import classNames from "classnames";
import { CellProps } from "../../types/CellProps";
import { toggleAdjacentCells, toggleCell } from "./helperFunctions";

export const Cell: React.FC<CellProps> = ({ row, col }) => {
  return (
    <div
      className={classNames("cell", colorChooser())}
      data-row={row}
      data-col={col}
      onClick={(e) => {
        toggleCell(e.currentTarget);
        toggleAdjacentCells(e.currentTarget);
      }}
    ></div>
  );
};

export default Cell;

const colorChooser = () => {
  const seed = Math.round(Math.random());

  return seed ? "cell--dark" : "cell--light";
};
