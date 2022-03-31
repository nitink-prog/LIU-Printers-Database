import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/config";
import { useTheme } from "../../hooks/useTheme";
import "./Printer.css";

export default function Printer() {
  const [printer, setPrinter] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  const { id } = useParams();
  const { mode } = useTheme();

  useEffect(() => {
    setIsPending(true);
    const unSubscribe = db
      .collection("printers")
      .doc(id)
      .onSnapshot((doc) => {
        if (doc.exists) {
          setPrinter(doc.data());
          setIsPending(false);
        } else {
          setIsPending(false);
          setError("Could not find that printer.");
        }
      });
    // Clean-up function: unsubscribe from the listener above when <Recipe /> unmounts
    // prevents this useEffect from running when we're on a different page
    return () => unSubscribe();
  }, [id]);

  const handleClickEdit = () => {
    // TODO: add edit logic
  };

  return (
    <div className={`recipe ${mode}`}>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}

      {printer && (
        <>
          <h2 className="page-title">172.18.111.{id}</h2>
          <table className="printer-table">
            <tbody>
              <tr>
                <td>Location</td>
                <td>
                  {printer.building} {printer.room}
                </td>
              </tr>
              <tr>
                <td>Department</td>
                <td>{printer.department}</td>
              </tr>
              <tr>
                <td>Model</td>
                <td>Canon iR-ADV {printer.model}</td>
              </tr>
            </tbody>
          </table>
          <br />
          <h3>Advanced</h3>
          <table className="printer-table">
            <tbody>
              <tr>
                <td>Name</td>
                <td>{printer.name}</td>
              </tr>
              <tr>
                <td>MAC Address</td>
                <td>{printer.macAddress}</td>
              </tr>
              <tr>
                <td>Serial</td>
                <td>{printer.serial}</td>
              </tr>
              <tr>
                <td>Date Updated</td>
                <td>{printer.dateUpdated}</td>
              </tr>
            </tbody>
          </table>
          <button onClick={handleClickEdit}>Edit</button>
        </>
      )}
    </div>
  );
}
