import React from "react";
import {Route} from "react-router-dom"
import MenuApp from "./MenuApp";
import {recipes} from "./data/recipe";
import ColorApp from "./ColorApp";
import {Home} from "./Home";
import {ColorProvider} from "./ColorProvider";

export const App: React.FC = () => {
    return (
        <div>
            <Route
                exact path="/">
                <Home />
            </Route>

            <Route
                path="/menu">
                <MenuApp title={"Menu"} recipes={recipes}/>
            </Route>

            <Route
                path="/color">
                <ColorProvider>
                    <ColorApp/>
                </ColorProvider>

            </Route>
        </div>
    )
}