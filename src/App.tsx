import React from "react";
import {Route} from "react-router-dom"
import MenuApp from "./components/menu/MenuApp";
import {recipes} from "./data/recipe";
import ColorApp from "./components/color/ColorApp";
import {Home} from "./components/Home";
import {ColorProvider} from "./components/color/ColorProvider";
import {CheckboxApp} from "./components/checkbox/CheckboxApp";
import {Phrase} from "./components/phrase/Phrase";
import {ForceRender} from "./components/forceRender/ForceRender";
import {User} from "./components/User";
import {GithubUser} from "./components/github/GithubUser";

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

            <Route path="/forcerender">
                <ForceRender />
            </Route>

            <Route path="/user">
                <User />
            </Route>

            <Route path="/github">
                <GithubUser login="moonhighway" />
            </Route>
        </div>
    )
}