import React from 'react';
import { Link } from "react-router-dom";

export default function Header(props){
    return (
        <header>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" className="nav-link">About</Link>
                </li>
                <li className="nav-item">
                    <Link to="/careers" className="nav-link">Careers</Link>
                </li>
                <li className="nav-item">
                    <Link to="/admin" className="nav-link">Admin</Link>
                </li>
            </ul>
        </header>
    )
}