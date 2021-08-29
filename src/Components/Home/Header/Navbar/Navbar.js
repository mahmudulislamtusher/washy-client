import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import logo from '../../../../images/logos/logo.png'
import { UserContext } from '../../../../App';

const Navbar = () => {
    const [loggedInUser] = useContext(UserContext)
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light py-4">
            <Link to="/" ><img style={{width: '130px'}} src={logo} alt=""/></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon">
                </span>
                
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav siteNavigation">
                    <li className="nav-item active">
                        <Link className="nav-link mr-4" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-4" to="#">Our Portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-4" to="#">Our Team</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-4" to="#">Contact Us</Link>
                    </li>
                    <li className="nav-item">
                        {
                            loggedInUser.email ? <Link className="nav-link text-white text-center loginBtn" to="/dashboard">Dashboard</Link> : <Link className="nav-link text-white text-center loginBtn" to="/dashboard">Login</Link>
                        }
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;