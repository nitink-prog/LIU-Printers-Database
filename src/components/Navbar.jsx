import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import Searchbar from "./Searchbar";
import "./Navbar.css";
import ThemeSelector from "./ThemeSelector";

export default function Navbar() {
  const { mode, color } = useTheme();

  return (
    <div className={`navbar ${mode}`} style={{ background: color }}>
      <nav>
        <Link to="/" className="brand">
          <h1>LIU Printers</h1>
        </Link>
        <Searchbar />
        <Link to="/create" className="button">
          Add Printer
        </Link>
        <ThemeSelector />
      </nav>
    </div>
  );
}
