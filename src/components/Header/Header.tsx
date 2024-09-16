import { HeaderProps } from "../../types/HeaderProps";
import Logo from "../Logo/Logo";
import Reset from "../Reset/Reset";
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
        <Reset setRerender={setRerender} setMovesNum={setMovesNum} />
      </li>
    </ul>
  </div>
);

export default Header;
