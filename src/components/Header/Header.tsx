import { HeaderProps } from "../../types/HeaderProps";
import Logo from "../Logo/Logo";
import RowColSelector from "../RowColSelector/RowColSelector";

const Header: React.FC<HeaderProps> = ({
  rowsNum,
  setRowsNum,
  colsNum,
  setColsNum,
  rerender,
  setRerender,
  movesNum,
  setMovesNum,
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
          setMovesNum={setMovesNum}
        />
      </li>
      <li>
        <p className="moves">Number of moves: {movesNum}</p>
      </li>
      <li className="header_list__item">
        <button
          className="reset"
          onClick={() => {
            setRerender((rerender) => !rerender);
            setMovesNum(0);
          }}
        >
          reset
        </button>
      </li>
    </ul>
  </div>
);

export default Header;
