import React from "react";
import {Route} from "react-router-dom"
import MenuApp from "./MenuApp";
import {recipes} from "./data/recipe";
import ColorApp from "./ColorApp";
import {Home} from "./Home";
import {ColorProvider} from "./ColorProvider";
import {CheckboxApp} from "./CheckboxApp";
import {Phrase} from "./Phrase";
import {ForceRender} from "./ForceRender";

export const App: React.FC = () => {
    return (
        <div>
            <Route
                exact path="/">
                <Home/>
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

            <Route
                path="/check">
                <CheckboxApp/>
            </Route>

            <Route
                path="/phrase">
                <Phrase/>
            </Route>

            <Route path={"/forcerender"}>
                <ForceRender />
            </Route>
        </div>
    )
}