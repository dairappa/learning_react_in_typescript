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
            </nav>
        </div>
    )
}