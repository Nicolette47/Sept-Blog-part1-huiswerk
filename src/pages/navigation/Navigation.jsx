import React from 'react';
import './Navigation.css';
import {NavLink} from 'react-router-dom';


function Navigation() {
    return (

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

    );
}

export default Navigation;