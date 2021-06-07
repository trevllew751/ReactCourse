import './App.css';
import VendingMachine from "./VendingMachine";
import Chips from "./Chips";
import Candy from "./Candy";
import Soda from "./Soda"
import {Route, NavLink, Switch} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <nav className="nav-bar">
                <NavLink exact to={"/"} activeClassName={"active-link"}>Vending Machine</NavLink>
                <NavLink exact to={"/chips"} activeClassName={"active-link"}>Chips</NavLink>
                <NavLink exact to={"/candy"} activeClassName={"active-link"}>Candy</NavLink>
                <NavLink exact to={"/soda"} activeClassName={"active-link"}>Soda</NavLink>
            </nav>
            <Switch>
                <Route exact path={"/"} component={VendingMachine}/>
                <Route exact path={"/chips"} component={Chips}/>
                <Route exact path={"/candy"} component={Candy}/>
                <Route exact path={"/soda"} component={Soda}/>
            </Switch>
        </div>
    );
}

export default App;
