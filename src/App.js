import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useTheme } from "./hooks/useTheme";
import Navbar from "./components/Navbar";
import ThemeSelector from "./components/ThemeSelector";
import Create from "./pages/create/Create";
import Home from "./pages/home/Home";
import Printer from "./pages/printer/Printer";
import Search from "./pages/search/Search";
import "./App.css";
import { useState } from "react";

function App() {
  const [showTheme, setShowTheme] = useState(true);
  const { mode } = useTheme();

  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
        <Navbar />
        <ThemeSelector />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/printers/:id">
            <Printer />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
