import React from 'react';
import './Navigation.css';
import {NavLink} from 'react-router-dom';
import logo from "../../assets/logo-white.png";


function Navigation() {
    return (
        <>
            <div className="navigation-container">
                <img src={logo} alt="Company logo"/>

                <ul className="nav-ul">
                    <li>
                        <NavLink
                            className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                            to="/">
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                            to="/NewPost">
                            Nieuwe post
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                            to="OverviewPosts">
                            Alle posts
                        </NavLink>

                    </li>
                </ul>
            </div>
        </>
    );
}

export default Navigation;