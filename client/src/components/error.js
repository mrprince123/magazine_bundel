import React from "react";
import { NavLink } from 'react-router-dom';

function Error() {
    return (
        <div className="error_div"> 
                <img src="https://img.icons8.com/external-flaticons-flat-flat-icons/104/null/external-not-found-no-code-flaticons-flat-flat-icons.png" alt="404 error"></img>
                <h1>404</h1>
                <p>page not found or removed</p>
                <button><NavLink to="/" className="nav-link">Go Home</NavLink></button>
        </div>
    )
}

export default Error;