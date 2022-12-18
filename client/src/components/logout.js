import React, { useContext, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';

function Logout() {

    const { dispatch } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('/logout', {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        }).then((res) => {
            dispatch({ type: 'USER', payload: false })
            navigate('/login');
        }).catch((err) => {
            console.log(err);
        })
    });


    return (
        <>
            <h1>This is the Logout Page</h1>
        </>
    )
}

export default Logout;