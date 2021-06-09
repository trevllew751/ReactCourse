import './App.css';
import Food from "./Food";
import {Route, Switch} from "react-router-dom"
import Meal from "./Meal";
import FoodSearch from "./FoodSearch";
import Navbar from "./Navbar";


function App() {
    return (
        <div className="App">
            <Navbar/>
            <Switch>
                {/*<Route exact path={"/food/:name"} render={(routeProps) => <Food name={routeProps.match.params.name}/>} />*/}
                {/*<Route exact path={"/food/:name"} render={(routeProps) => <Food {...routeProps}/>} />*/}
                {/*<Route exact path={"/"} component={FoodSearch}/>*/}
                <Route exact path={"/"} render={(routeProps) => <FoodSearch {...routeProps}/>}/>
                <Route exact path={"/food/:name"} component={Food} />
                <Route exact path={"/food/:foodName/drink/:drinkName"} component={Meal}/>
                <Route render={() => <h1>Error 404: Not Found!</h1>}/>
            </Switch>
        </div>
    );
}

export default App;
