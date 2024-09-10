import { RowsColsProps } from "../../types/RowsColsProps";
import Logo from "../Logo/Logo";
import RowColSelector from "../RowColSelector/RowColSelector";

const Header: React.FC<RowsColsProps> = ({
  rowsNum,
  setRowsNum,
  colsNum,
  setColsNum,
  rerender,
  setRerender,
}) => (
  <div className="header">
    <ul className="header_list">
      <li>
        <Logo />
      </li>
      <li>
        <RowColSelector
          rowsNum={rowsNum}
          setRowsNum={setRowsNum}
          colsNum={colsNum}
          setColsNum={setColsNum}
          rerender={rerender}
          setRerender={setRerender}
        />
      </li>
      <li className="header_list__item">
        <button
          className="reset"
          onClick={() => {
            setRerender((rerender) => !rerender);
          }}
        >
          reset
        </button>
      </li>
    </ul>
  </div>
);

export default Header;
