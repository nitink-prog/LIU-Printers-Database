import { useState } from "react";
import { useHistory } from "react-router-dom";
import { db } from "../../firebase/config";
import { useTheme } from "../../hooks/useTheme";
import "./Create.css";

export default function Create() {
  const [ipAddress, setIpAddress] = useState("");
  const [building, setBuilding] = useState("");
  const [dateUpdated, setDateUpdated] = useState("");
  const [department, setDepartment] = useState("");
  const [macAddress, setMacAddress] = useState("");
  const [model, setModel] = useState("");
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [serial, setSerial] = useState("");
  
  const history = useHistory();

  const { mode, color } = useTheme();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const printer = {
      building,
      dateUpdated,
      department,
      macAddress,
      model,
      name,
      room,
      serial,
    };
    try {
      await db.collection("printers").doc(ipAddress).set(printer);
      history.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={`create ${mode}`}>
      <h2 className="page-title">Add a Printer</h2>
      <form onSubmit={handleSubmit}>
        <h4>Required</h4>
        <label>
          <span>IP Address (Last Octet only):</span>
          <input
            required
            type="number"
            min="100"
            max="255"
            onChange={(e) => setIpAddress(e.target.value)}
            value={ipAddress}
          />
        </label>

        <label>
          <span>Department </span>
          <input
            required
            type="text"
            onChange={(e) => setDepartment(e.target.value)}
            value={department}
          />
        </label>

        <label>
          <span>Building </span>
          <select
            required
            onChange={(e) => setBuilding(e.target.value)}
            value={building}>
            <option value="DEFAULT" disabled>
              Select...
            </option>
            <option value="H">H - Humanities</option>
            <option value="HS">HS - Health Sciences</option>
            <option value="L">L - Pharmacy</option>
            <option value="LLC">LLC - Library Learning Center</option>
            <option value="M">M - Metcalfe</option>
            <option value="P">P - Pratt</option>
            <option value="S">S - Sloan</option>
          </select>
        </label>

        <label>
          <span>Room </span>
          <input
            required
            type="text"
            onChange={(e) => setRoom(e.target.value)}
            value={room}
          />
        </label>

        <label>
          <span>Model </span>
          <input
            required
            type="text"
            onChange={(e) => setModel(e.target.value)}
            value={model}
          />
        </label>

        <h4>Advanced (Optional)</h4>
        <label>
          <span>Name </span>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>

        <label>
          <span>MAC Address </span>
          <input
            type="text"
            onChange={(e) => setMacAddress(e.target.value)}
            value={macAddress}
          />
        </label>

        <label>
          <span>Serial </span>
          <input
            type="text"
            onChange={(e) => setSerial(e.target.value)}
            value={serial}
          />
        </label>

        <label>
          <span>Date Updated </span>
          <input
            type="date"
            onChange={(e) => setDateUpdated(e.target.value)}
            value={dateUpdated}
          />
        </label>

        <button
          className="btn"
          style={{ backgroundColor: color }}
          onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
