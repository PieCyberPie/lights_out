import classNames from "classnames";
import { CellProps } from "../../types/CellProps";

export const Cell: React.FC<CellProps> = ({ row, col }) => {
  return (
    <div
      className={classNames("cell", colorChooser())}
      data-row={row}
      data-col={col}
    ></div>
  );
};

export default Cell;

const colorChooser = () => {
  const seed = Math.round(Math.random());

  return seed ? "cell--dark" : "cell--light";
};
