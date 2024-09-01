import { useState } from "react";
import Header from "./components/Header/Header.tsx";
import "./styles/index.scss";
import Field from "./components/Field/Field.tsx";

function App() {
  const [rowsNum, setRowsNum] = useState(3);
  const [colsNum, setColsNum] = useState(3);
  return (
    <>
      <Header
        rowsNum={rowsNum}
        setRowsNum={setRowsNum}
        colsNum={colsNum}
        setColsNum={setColsNum}
      />
      <Field rows={rowsNum} cols={colsNum} />
    </>
  );
}

export default App;
