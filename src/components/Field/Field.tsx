import { FieldRowsColsProps } from "../../types/FieldRowsColsProps";
import Cell from "../Cell/Cell";

const Field: React.FC<FieldRowsColsProps> = ({ rowsNum, colsNum }) => {
  const cells = Array.from({ length: rowsNum * colsNum }, (_, index) => index);

  return (
    <>
      <div
        className="grid-container"
        style={{
          gridTemplateColumns: `repeat(${colsNum}, 1fr)`,
          gridTemplateRows: `repeat(${rowsNum}, 1fr)`,
        }}
      >
        {cells.map((cellId) => {
          console.log(cellId);
          return (
            <Cell
              row={Math.floor(cellId / colsNum)}
              col={cellId % colsNum}
              key={cellId}
            />
          );
        })}
      </div>
    </>
  );
};

export default Field;
