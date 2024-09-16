import classNames from "classnames";
import { CellProps } from "../../types/CellProps";
import { makeMove } from "./helperFunctions";
import { memo } from "react";

export const Cell: React.FC<CellProps> = memo(
  ({ row, col, setMovesNum, color }) => {
    return (
      <div
        className={classNames("cell", color || colorChooser())}
        data-row={row}
        data-col={col}
        onClick={(e) => {
          makeMove(e.currentTarget);
          setMovesNum((movesNum) => movesNum + 1);
        }}
      ></div>
    );
  }
);

export default Cell;

const colorChooser = () => {
  const seed = Math.round(Math.random());

  return seed ? "cell--dark" : "cell--light";
};
