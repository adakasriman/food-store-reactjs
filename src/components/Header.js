import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import LogoutButton from './LogoutButton';

function Header() {
    const location = useLocation();

    if (location.pathname === '/login') {
        return null;
    }

    return (
        <header className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to="/dashboard">
                    Food Store
                </Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <LogoutButton />
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;
