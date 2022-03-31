import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import { db } from "../firebase/config";
import deleteIcon from "../assets/delete-icon.svg";
import "./PrinterList.css";

export default function RecipeList({ printers }) {
  const { mode } = useTheme();

  if (printers.length === 0) {
    return <div className="error">No printers found...</div>;
  }

  const handleClickDelete = (id) => {
    db.collection("printers").doc(id).delete();
  };

  const handleClickLog = () => {
    console.log(printers);
  };

  return (
    <div className="recipe-list">
      {printers.map((printer) => (
        <div key={printer.id} className={`card ${mode}`}>
          <h3>172.18.111.{printer.id}</h3>
          <p>
            {printer.building} {printer.room}
          </p>
          <div>
            <p>{printer.department} Dept.</p>
            <p>iR-ADV {printer.model}</p>
          </div>
          <Link to={`/printers/${printer.id}`}>Details</Link>
          <img
            className="delete"
            src={deleteIcon}
            alt="delete icon"
            onClick={() => handleClickDelete(printer.id)}
          />
        </div>
      ))}
      <button onClick={handleClickLog}>Log printers</button>
    </div>
  );
}
