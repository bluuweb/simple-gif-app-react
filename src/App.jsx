import Navbar from "./components/Navbar";
import Inicio from "./pages/Inicio";
import Favoritos from "./pages/Favoritos";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mt-2 text-center">
        <Switch>
          <Route path="/" exact>
            <Inicio />
          </Route>
          <Route path="/favoritos" exact>
            <Favoritos />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
