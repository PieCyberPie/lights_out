import { FieldProps } from "../../types/FieldProps";
import Cell from "../Cell/Cell";

const Field: React.FC<FieldProps> = ({ rowsNum, colsNum, setMovesNum }) => {
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
          return (
            <Cell
              row={Math.floor(cellId / colsNum)}
              col={cellId % colsNum}
              setMovesNum={setMovesNum}
              rowsNum={rowsNum}
              key={cellId}
            />
          );
        })}
      </div>
    </>
  );
};

export default Field;
