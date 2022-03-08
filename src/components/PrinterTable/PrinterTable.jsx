import "./PrinterTable.css";

export default function PrinterTable({ printers, updater, setUpdater }) {
  return (
    <div className="printer-table">
      <table>
        <thead>
          <tr>
            <th>IP Address</th>
            <th>Department</th>
            <th>Location</th>
            <th>Model</th>
            <th>Name</th>
            <th>MAC Address</th>
            <th>Serial #</th>
            <th>Date Updated</th>
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
                <td>{printer.adv.name}</td>
                <td>{printer.adv.macaddress}</td>
                <td>{printer.adv.serial}</td>
                <td>{printer.adv.dateupdated}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
