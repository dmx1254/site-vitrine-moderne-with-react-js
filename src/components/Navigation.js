import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                <NavLink to = "/" exact className = "hover" activeClassName = "nav-active">
                    <li>accueil</li>
                </NavLink>
                <li className = "nav-portfolio">portfolio
                    <ul className = "nav-projects">
                        <NavLink to = "/projet1" activeClassName = "nav-active" className = "hover">
                            <li>projet 1</li>
                        </NavLink>
                        <NavLink to = "/projet2" activeClassName = "nav-active" className = "hover">
                            <li>projet 2</li>
                        </NavLink>
                        <NavLink to = "/projet3" activeClassName = "nav-active" className = "hover">
                            <li>projet 3</li>
                        </NavLink>
                        <NavLink to = "/projet4" activeClassName = "nav-active" className = "hover">
                            <li>projet 4</li>
                        </NavLink>
                    </ul>
                </li>
                <NavLink to = "/contacts" exact className = "hover" activeClassName = "nav-active">
                    <li>contacts</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;