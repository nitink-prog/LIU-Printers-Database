import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import { db } from "../firebase/config";
import "./PrinterList.css";

export default function RecipeList({ printers }) {
  const { mode, color } = useTheme();

  if (printers.length === 0) {
    return <div className="error">No printers found...</div>;
  }



  const handleClickLog = () => {
    console.log(printers);
  };

  return (
    <div className="recipe-list">
      {printers.map((printer) => (
        <div
          key={printer.id}
          className={`card ${mode}`}
          style={{ outlineColor: color }}>
          <div>
            <h3>172.18.111.{printer.id}</h3>
            <p>
              {printer.building} {printer.room}
            </p>
            <p>{printer.department} Dept.</p>
            <p>iR-ADV {printer.model}</p>
            <Link to={`/printers/${printer.id}`}>Details</Link>
          </div>
        </div>
      ))}
      <button onClick={handleClickLog}>Log printers</button>
    </div>
  );
}
