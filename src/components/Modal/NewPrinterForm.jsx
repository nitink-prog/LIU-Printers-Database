import { useState } from "react";

export default function NewPrinterForm({ url, setUrl }) {
  const [ipaddress, setIpAddress] = useState("100");
  const [department, setDepartment] = useState("");
  const [building, setBuilding] = useState("DEFAULT");
  const [room, setRoom] = useState("");
  const [model, setModel] = useState("");
  const [name, setName] = useState("");
  const [macaddress, setMacAddress] = useState("");
  const [serial, setSerial] = useState("");
  const [dateupdated, setDateUpdated] = useState("");

  const resetForm = () => {
    setIpAddress("100");
    setDepartment("");
    setBuilding("DEFAULT");
    setRoom("");
    setModel("");
    setName("");
    setMacAddress("");
    setSerial("");
    setDateUpdated("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const printer = {
      id: ipaddress,
      department: department,
      building: building,
      room: room,
      model: model,
      adv: {
        name: name,
        macaddress: macaddress,
        serial: serial,
        dateupdated: dateupdated,
      },
    };
    console.log(printer);

    const postPrinter = {
      method: "POST",
      body: JSON.stringify(printer),
      headers: {
        "Content-Type": "application/json",
      },
    };
    console.log(postPrinter);

    const postData = async () => {
      const res = await fetch(url, postPrinter);
      setUrl((url = new String(url)));
    };
    postData();
    resetForm();
    // add success text
  };

  return (
    <form className="new-printer-form">
      <h3>Add New Printer</h3>
      <label>
        <span>IP Address </span>
        <input
          required
          type="number"
          min="100"
          max="255"
          onChange={(e) => setIpAddress(e.target.value)}
          value={ipaddress}
        />
      </label>
      <br />
      <label>
        <span>Department </span>
        <input
          required
          type="text"
          onChange={(e) => setDepartment(e.target.value)}
          value={department}
        />
      </label>
      <br />
      <label>
        <span>Building </span>
        <select
          required
          onChange={(e) => setBuilding(e.target.value)}
          value={building}
        >
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
      <br />
      <label>
        <span>Room </span>
        <input
          required
          type="text"
          onChange={(e) => setRoom(e.target.value)}
          value={room}
        />
      </label>
      <br />
      <label>
        <span>Model </span>
        <input
          required
          type="text"
          onChange={(e) => setModel(e.target.value)}
          value={model}
        />
      </label>
      <br />
      <label>
        <span>Name </span>
        <input
          required
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </label>
      <br />
      <label>
        <span>MAC Address </span>
        <input
          required
          type="text"
          onChange={(e) => setMacAddress(e.target.value)}
          value={macaddress}
        />
      </label>
      <br />
      <label>
        <span>Serial </span>
        <input
          required
          type="text"
          onChange={(e) => setSerial(e.target.value)}
          value={serial}
        />
      </label>
      <br />
      <label>
        <span>Date Updated </span>
        <input
          required
          type="date"
          onChange={(e) => setDateUpdated(e.target.value)}
          value={dateupdated}
        />
      </label>
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
}
