import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useTheme } from "./hooks/useTheme";
import Navbar from "./components/Navbar";
import Create from "./pages/create/Create";
import Home from "./pages/home/Home";
import Printer from "./pages/printer/Printer";
import Search from "./pages/search/Search";
import "./App.css";

function App() {
  const { mode } = useTheme();

  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
        <Navbar />
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
