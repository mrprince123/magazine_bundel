import React from 'react'
import {NavLink} from 'react-router-dom';

function Thanks() {
    return (
        <div className='thanks_div'>
            <img src="https://img.icons8.com/fluency/104/null/edit-message.png" alt='Think for pic'></img>
            <h1>Thanks for Submitting!</h1>
            <p>your message has been sent!</p>
            <button><NavLink className='nav-link' to="/">Go Home</NavLink></button>
        </div>
    );
}

export default Thanks;