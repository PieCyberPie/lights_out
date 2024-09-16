import { useState } from "react";
import Header from "./components/Header/Header.tsx";
import "./styles/index.scss";
import Field from "./components/Field/Field.tsx";
import Footer from "./components/Footer/Footer.tsx";

export const DEFAULT_MODE = "default";
export const CUSTOM_MODE = "custom";

function App() {
  const [rowsNum, setRowsNum] = useState(3);
  const [colsNum, setColsNum] = useState(3);
  const [movesNum, setMovesNum] = useState(0);
  const [rerender, setRerender] = useState(false);
  const [isWin, setIsWin] = useState(false);
  const [mode, setMode] = useState(DEFAULT_MODE);

  return (
    <main>
      <Header
        rowsNum={rowsNum}
        setRowsNum={setRowsNum}
        colsNum={colsNum}
        setColsNum={setColsNum}
        rerender={rerender}
        setRerender={setRerender}
        movesNum={movesNum}
        setMovesNum={setMovesNum}
      />
      <Field
        rowsNum={rowsNum}
        colsNum={colsNum}
        movesNum={movesNum}
        setMovesNum={setMovesNum}
      />
      <Footer />
    </main>
  );
}

export default App;
