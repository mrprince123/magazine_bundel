import React from "react";
import { NavLink } from 'react-router-dom';

function Error() {
    return (
        <div className="main-register">
            <div className="error-page">  
                <h1>404</h1>
                <h3>Page not found or removed</h3>
                <button><NavLink to="/" className="nav-text">Go Back to Home Page</NavLink></button>
            </div>
        </div>
    )
}

export default Error;