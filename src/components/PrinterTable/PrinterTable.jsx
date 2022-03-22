import { useState } from "react";
import Modal from "../Modal/Modal";
import "./PrinterTable.css";

export default function PrinterTable({ printers }) {
  const [hideAdvanced, setHideAdvanced] = useState(true);

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleClickDelete = () => {
    setShowDeleteModal(true);
  };

  const handleClickConfirm = (deleteId) => {
    console.log(deleteId, "delete function");
  };

  return (
    <div className="printer-table">
      {hideAdvanced ? (
        <button onClick={() => setHideAdvanced(false)}>Show Advanced</button>
      ) : (
        <button onClick={() => setHideAdvanced(true)}>Hide Advanced</button>
      )}
      <table id="displayTable">
        <thead>
          <tr>
            <th>IP Address</th>
            <th>Department</th>
            <th>Location</th>
            <th>Model</th>
            <th hidden={hideAdvanced}>Name</th>
            <th hidden={hideAdvanced}>MAC Address</th>
            <th hidden={hideAdvanced}>Serial #</th>
            <th hidden={hideAdvanced}>Date Updated</th>
            <th>Modify</th>
          </tr>
        </thead>
        <tbody>
          {printers &&
            printers.map((printer) => (
              <tr key={printer.id}>
                <td>172.18.111.{printer.id}</td>
                <td>{printer.department}</td>
                <td>
                  {printer.building} {printer.room}
                </td>
                <td>iR-ADV {printer.model}</td>
                <td hidden={hideAdvanced}>{printer.adv.name}</td>
                <td hidden={hideAdvanced}>{printer.adv.macaddress}</td>
                <td hidden={hideAdvanced}>{printer.adv.serial}</td>
                <td hidden={hideAdvanced}>{printer.adv.dateupdated}</td>
                <td>
                  <button>Edit</button>
                  <button onClick={handleClickDelete}>Delete</button>
                  {showDeleteModal && (
                    <Modal handleClickClose={() => setShowDeleteModal(false)}>
                      <h3>Do you want to DELETE this printer?</h3>
                      <p>IP Address: 172.18.111.{printer.id}</p>
                      <p>
                        Location: {printer.building} {printer.room}
                      </p>
                      <button onClick={() => setShowDeleteModal(false)}>
                        NO
                      </button>{" "}
                      <button onClick={() => handleClickConfirm(printer.id)}>
                        YES
                      </button>
                    </Modal>
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
