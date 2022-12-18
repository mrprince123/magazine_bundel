import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../App';

function Login() {
    const { dispatch } = useContext(UserContext);
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('/login', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    // "Access-Control-Allow-Origin": "*"
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });
            const data = await res.json();
            console.log(data);

            if (res.status === 400 || !data) {
                window.alert("Please fill all the fields");
                console.log("Pleaes fill all the fields");
            } else {
                dispatch({ type: 'USER', payload: true })
                window.alert("Login Successfully");
                console.log("Login Successfully");
                navigate('/blog');
            }
        } catch (error) {
            console.log("This is the Error " + error);
        }
    }

    return (
        <div className='login_div'>

            <img src="https://img.icons8.com/cute-clipart/64/null/l.png" alt='this is an pic of login' />
            <h2>Welcome Back</h2>

            <div className='normal_login'>
                <input type='email' required placeholder='Your Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type='text' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <p>Don't have an account? <span><NavLink to="/register" className="nav-link">Sign up</NavLink></span></p>
                <button onClick={handleLogin}>Login</button>
            </div>
            {/* <p>or</p>
            <div className='google_login'>
                <button onClick={googleAuth}>Google Login</button>
            </div> */}

        </div>
    )
}

export default Login;