import Palette from "./Palette";
import PaletteList from "./PaletteList";
import seedColors from "./seedColors";
import {generatePalette} from "./ColorHelpers";
import {Route, Switch} from "react-router-dom";
import React, {Component} from "react";
import SingleColorPalette from "./SingleColorPalette";
import NewPaletteForm from "./NewPaletteForm";

class App extends Component {
    findPalette(id) {
        return seedColors.find(palette => palette.id === id);
    }

    render() {
        return (
            <div className="App">
                <Switch>
                    <Route
                        exact
                        path={"/"}
                        render={(routeProps) => <PaletteList palettes={seedColors} {...routeProps}/>}
                    />
                    <Route
                        exact
                        path={"/palette/new"}
                        render={() => <NewPaletteForm/>}
                    />
                    <Route
                        exact
                        path={"/palette/:id"}
                        render={(routeProps) => <Palette
                            palette={generatePalette(this.findPalette(routeProps.match.params.id))}/>}
                    />
                    <Route
                        exact
                        path={"/palette/:paletteId/:colorId"}
                        render={(routeProps) => <SingleColorPalette
                            colorId={routeProps.match.params.colorId}
                            palette={generatePalette(this.findPalette(routeProps.match.params.paletteId))}/>}
                    />
                </Switch>
            </div>
        );
    }
}

export default App;

