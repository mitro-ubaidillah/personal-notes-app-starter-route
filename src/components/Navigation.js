import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="navigation">
            <ul>
                <li>
                    <h1><Link to="/archives">Arsip</Link></h1>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;