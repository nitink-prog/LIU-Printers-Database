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

  return (
    <div className="recipe-list">
      {printers.map((printer) => (
        <div key={printer.id} className={`card ${mode}`}>
          <h3>{printer.id}</h3>
          <p>{printer.building}</p>
          {/* <div>{printer.method.substring(0, 100)}...</div> */}
          <Link to={`/printer/${printer.id}`}>Cook This</Link>
          <img
            className="delete"
            src={deleteIcon}
            alt="delete icon"
            onClick={() => handleClickDelete(printer.id)}
          />
        </div>
      ))}
    </div>
  );
}
