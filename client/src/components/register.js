import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function Register() {

    const navigate = useNavigate();
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCPassword] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('/register', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username,
                    email,
                    password,
                    cpassword
                })
            })

            const data = await res.json();
            console.log(data);

            if (res.status === 400 || !data) {
                window.alert("Please fill all the fields or This email is already registered with us.");
                console.log("Pleaes fill all the fields");
            } else {
                window.alert("Registered Successfully");
                console.log("Registered Successfully");
                navigate('/login');
            }

        } catch (error) {
            console.log("This is the Error " + error);
        }
    }

    // const googleAuth = () => {
    //     window.open("http://localhost:5000/auth/google", "_self");
    // }

    return (
        <div className='register_div'>
            <img src="https://img.icons8.com/bubbles/64/null/r--v2.png" alt='this is the pic of the register' />

            <h2>Create Your Account</h2>

            <div className='normal_register'>
                <input type='email' placeholder='Your Name' value={username} onChange={(e) => setUserName(e.target.value)} />
                <input type='email' placeholder='Your Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type='text' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type='text' placeholder='Conform Password' value={cpassword} onChange={(e) => setCPassword(e.target.value)} />
                <p>Already have an account? <span><NavLink to="/login" className="nav-link">Log in</NavLink></span></p>
                <button onClick={handleRegister}>Register</button>
            </div>
            {/* <p>or</p>
            <div className='google_register'>
                <button onClick={googleAuth} >Google Signup</button>
            </div> */}

        </div>
    )
}

export default Register;