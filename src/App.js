import React, { useState } from "react";
import { useFetch } from "./hooks/useFetch";
import TableFilters from "./components/PrinterTable/TableFilters";
import PrinterTable from "./components/PrinterTable/PrinterTable";
import Modal from "./components/Modal/Modal";
import NewPrinterForm from "./components/Modal/NewPrinterForm";

import "./App.css";

function App() {
  const [showAddNewModal, setShowAddNewModal] = useState(false);
  const [url, setUrl] = useState("http://localhost:3000/printers");

  let { data: printers } = useFetch(url);

  const handleClickAddNewModalClose = () => {
    setShowAddNewModal(false);
  };

  return (
    <div className="App">
      <h1>LIU Brooklyn Printers Database</h1>
      <button onClick={() => setShowAddNewModal(true)}>Add Printer</button>
      {showAddNewModal && (
        <Modal handleClickClose={handleClickAddNewModalClose}>
          <NewPrinterForm url={url} setUrl={setUrl} />
        </Modal>
      )}
      <br />
      <TableFilters url={url} setUrl={setUrl} />
      <PrinterTable printers={printers} />
    </div>
  );
}

export default App;
