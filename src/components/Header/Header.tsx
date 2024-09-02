import logo from "../../assets/icon/logo.svg";
import { RowsColsProps } from "../../types/RowsColsProps";
import RowColSelector from "../RowColSelector/RowColSelector";

const Header: React.FC<RowsColsProps> = ({
  rowsNum,
  setRowsNum,
  colsNum,
  setColsNum,
  rerender,
  setRerender,
}) => (
  <ul className="header_list">
    <li className="header_list__item">
      <img src={logo} alt="l" />
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
);

export default Header;
