import React from "react";
import {Link} from "react-router-dom";

export const Home : React.FC = () => {
    return (
        <div>
            <h1>Learning React</h1>
            <nav>
                <Link to="menu">Menu</Link>
                <Link to="color">Color</Link>
                <Link to="check">Check</Link>
                <Link to="phrase">Phrase</Link>
                <Link to="forcerender">Force Render</Link>
                <Link to="github">Github</Link>
                <Link to="List">List</Link>
            </nav>
        </div>
    )
}