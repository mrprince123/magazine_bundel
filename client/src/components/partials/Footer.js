import React from 'react';
import { NavLink } from 'react-router-dom';


function Footer() {
    return (
        <div>
            <div className="">
                <footer className="py-5 my-4">
                    <ul className="nav justify-content-center pb-3 mb-3">
                        <li className="nav-item"><NavLink to="/" className="nav-link px-2">Home</NavLink></li>
                        <li className="nav-item"><NavLink to="/blog" className="nav-link px-2">Blog</NavLink></li>
                        <li className="nav-item"><NavLink to="/about" className="nav-link px-2">About us</NavLink></li>
                        <li className="nav-item"><NavLink to="/contact" className="nav-link px-2">Contact us</NavLink></li>
                    </ul>
                    <p className="text-center">© 2022 Company, Inc</p>
                </footer>
            </div>
        </div>
    )
}

export default Footer;