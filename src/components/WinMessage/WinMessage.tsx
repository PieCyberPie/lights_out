import { WinProps } from "../../types/WinProps";
import Reset from "../Reset/Reset";

const WinMessage: React.FC<WinProps> = ({
  setRerender,
  setMovesNum,
  setIsWin,
  movesNum,
}) => {
  return (
    <>
      <div className="opacity_layer"></div>
      <div className="win_container">
        <h6 className="win_container_title win_container_item">
          Yay, you win!
        </h6>
        <p className="win_container_text win_container_item">
          Great news! You won and this took only {movesNum} moves!
        </p>
        <p className="win_container_text win_container_item">Now try again!</p>
        <Reset
          setRerender={setRerender}
          setMovesNum={setMovesNum}
          setIsWin={setIsWin}
        />
      </div>
    </>
  );
};

export default WinMessage;
