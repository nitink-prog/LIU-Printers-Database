import { useParams, useHistory } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { useTheme } from "../../hooks/useTheme";

import deleteIcon from "../../assets/delete-icon.svg";
import "./Printer.css";

export default function Printer() {
  const { id } = useParams();
  const history = useHistory();
  const { mode } = useTheme();
  const printerURL = `http://localhost:3008/printers/${id}`;

  let { data: printer, isPending, error } = useFetch(printerURL);
  let { deleteData } = useFetch(printerURL, "DELETE");

  console.log(printer);

  const handleClickDelete = () => {
    deleteData();
    setTimeout(() => {
      history.push("/");
    }, 100);
  };

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
          <img
            className="delete"
            src={deleteIcon}
            alt="delete icon"
            onClick={() => handleClickDelete(printer.id)}
          />
          <table className="printer-table">
            <tbody>
              <tr>
                <td>Location</td>
                <td>
                  {printer[0].building} {printer[0].room}
                </td>
              </tr>
              <tr>
                <td>Department</td>
                <td>{printer[0].department}</td>
              </tr>
              <tr>
                <td>Model</td>
                <td>Canon iR-ADV {printer[0].model}</td>
              </tr>
            </tbody>
          </table>
          <br />
          <h3>Advanced</h3>
          <table className="printer-table">
            <tbody>
              <tr>
                <td>Name</td>
                <td>{printer[0].name}</td>
              </tr>
              <tr>
                <td>MAC Address</td>
                <td>{printer[0].mac_address}</td>
              </tr>
              <tr>
                <td>Serial</td>
                <td>{printer[0].serial}</td>
              </tr>
              <tr>
                <td>Date Updated</td>
                <td>{printer[0].date_updated}</td>
              </tr>
            </tbody>
          </table>
          <button onClick={handleClickEdit}>Edit</button>
        </>
      )}
    </div>
  );
}
