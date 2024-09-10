import { useState } from "react";
import Header from "./components/Header/Header.tsx";
import "./styles/index.scss";
import Field from "./components/Field/Field.tsx";
import Footer from "./components/Footer/Footer.tsx";

function App() {
  const [rowsNum, setRowsNum] = useState(3);
  const [colsNum, setColsNum] = useState(3);
  const [rerender, setRerender] = useState(false);

  return (
    <main>
      <Header
        rowsNum={rowsNum}
        setRowsNum={setRowsNum}
        colsNum={colsNum}
        setColsNum={setColsNum}
        rerender={rerender}
        setRerender={setRerender}
      />
      <Field rowsNum={rowsNum} colsNum={colsNum} />
      <Footer />
    </main>
  );
}

export default App;
