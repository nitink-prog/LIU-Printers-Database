import { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import Searchbar from "./Searchbar";
import ThemeSelector from "./ThemeSelector";
import displaySettingsIcon from "../assets/displaysettings-icon.svg";
import "./Navbar.css";

export default function Navbar() {
  const [showTheme, setShowTheme] = useState(false);
  const { mode, color } = useTheme();

  const toggleShowTheme = () => {
    showTheme ? setShowTheme(false) : setShowTheme(true);
  };

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
        <div className={`mode-toggle ${mode}`}>
          <img
            src={displaySettingsIcon}
            alt="Show Theme Selector Toggle"
            onClick={toggleShowTheme}
          />
        </div>
        {showTheme && <ThemeSelector />}
      </nav>
    </div>
  );
}
