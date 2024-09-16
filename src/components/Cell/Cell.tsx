import classNames from "classnames";
import { CellProps } from "../../types/CellProps";
import { makeMove } from "./helperFunctions";

export const Cell: React.FC<CellProps> = ({ row, col, color }) => {
  return (
    <div
      className={classNames("cell", color || colorChooser())}
      data-row={row}
      data-col={col}
      onClick={(e) => {
        makeMove(e.currentTarget);
      }}
    ></div>
  );
};

export default Cell;

const colorChooser = () => {
  const seed = Math.round(Math.random());

  return seed ? "cell--dark" : "cell--light";
};
