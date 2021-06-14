import Palette from "./Palette";
import PaletteList from "./PaletteList";
import seedColors from "./seedColors";
import {generatePalette} from "./ColorHelpers";
import {Route, Switch} from "react-router-dom";
import React, {Component} from "react";

class App extends Component {
    findPalette(id) {
        return seedColors.find(palette => palette.id === id);
    }

    render() {
        return (
            <div className="App">
                <Switch>
                    <Route exact path={"/"} render={() => <PaletteList palettes={seedColors}/>}/>
                    <Route
                        exact
                        path={"/palette/:id"}
                        render={(routeProps) => <Palette
                            palette={generatePalette(this.findPalette(routeProps.match.params.id))}/>}/>
                </Switch>
            </div>
        );
    }
}

export default App;

