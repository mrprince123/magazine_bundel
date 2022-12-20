import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../App';

function Header() {

    const { state } = useContext(UserContext);

    const RenderMenu = () => {
        if (state) {
            return (
                <>
                    <li className="nav-item">
                        <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/blog">Blog</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/blogpost">Post Blog</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about" >About us</NavLink>
                    </li>
                    <div className='button_div_nav'>
                        <li className='nav-item'>
                            <NavLink to='/login' className='nav-link loginbtn'><button className=''>Login</button></NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to='/register' className='nav-link logoutbtn'><button className=''>Register</button></NavLink>
                        </li>
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <li className="nav-item">
                        <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/blog">Blog</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about" >About us</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact" >Contact us</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/login' className='nav-link'><button className=''>Login</button></NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/register' className='nav-link'><button className=''>Register</button></NavLink>
                    </li>
                </>

            )
        }
    }


    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">
                        <h3>College Magazine</h3>
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <RenderMenu></RenderMenu>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Header;

