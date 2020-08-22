import React from "react";
import {Link} from "react-router-dom";

export const Home : React.FC = () => {
    return (
        <div>
            <h1>Learning React</h1>
            <nav>
                <Link to="menu">Menu App</Link>
                <Link to="color">Color App</Link>
            </nav>
        </div>
    )
}