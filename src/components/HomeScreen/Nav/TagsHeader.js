import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ItemListHeader } from "./ItemListHeader";

export const TagsHeader = () => {

    const [items] = useState(['services', 'about-us', 'portfolio', 'team', 'blog', 'contact'])

    return (
        <ul className="navbar-nav">

            <li className="nav-item">
                <a className="nav-link">
                    <Link to="/">Home</Link>
                    
                </a>
            </li>
            {
                items.map(its => {
                    return <ItemListHeader link={"#" + its} text={its} />;
                })
            }
            <li className="nav-item">
                <a className="nav-link">
                    <NavLink exact to="/login">Login</NavLink>
                </a>
            </li>

        </ul>
    );
}

