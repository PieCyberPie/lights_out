import { FieldRowsColsProps } from "../../types/FieldRowsColsProps";

const Field: React.FC<FieldRowsColsProps> = ({ rows, cols }) => {
  return (
    <>
      <div className="container">
        <p>{[rows, cols]}</p>
      </div>
    </>
  );
};

export default Field;
