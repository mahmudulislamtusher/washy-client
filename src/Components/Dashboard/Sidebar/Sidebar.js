import React, { useContext, useEffect, useState } from 'react';
import { faComment, faHome, faFileAlt, faServer, faPlus, faSignOutAlt, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import logo from '../../../images/logos/logo.png'
import { UserContext } from '../../../App';
import * as firebase from "firebase/app";
const Sidebar = () => {

    const [loggedInUser, setLoggedInUser, newAdmin, setNewAdmin] = useContext(UserContext)
    const signOut = () => {
        firebase.auth().signOut().then(function () {
            setLoggedInUser({})
            setNewAdmin(false)
            sessionStorage.removeItem("userToken");
            sessionStorage.clear(); 
        }).catch(function (error) {
            // An error happened.
        });
    }

    return (
        <div className="sidebar d-flex flex-column justify-content-between py-5 px-4" >
            <Link to="/dashboard"><img className="img-fluid py-3 pb-5" style={{ width: "150px" }} src={logo} alt="" /></Link>
            <ul className="list-unstyled">
                {
                    newAdmin === false ? '' : ''
                }

                {
                    newAdmin ?

                        <div>
                            <li>
                                <Link to="/dashboard" className="text-dark">
                                    <FontAwesomeIcon icon={faServer} /> <span>Service List</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard/addService" className="text-dark">
                                    <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard/makeAdmin" className="text-dark">
                                    <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                                </Link>
                            </li>
                        </div>

                        :




                        <div>
                            <li>
                                <Link to="/dashboard" className="text-dark">
                                    <FontAwesomeIcon icon={faServer} /> <span>Service List</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard/order" className="text-dark">
                                    <FontAwesomeIcon icon={faUsers} /> <span>Orders</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard/review" className="text-dark">
                                    <FontAwesomeIcon icon={faComment} /> <span>Review</span>
                                </Link>
                            </li>
                        </div>
                }
                <li>
                    <Link to="/" className="text-dark" >
                        <FontAwesomeIcon icon={faHome} /> <span>Go to Home</span>
                    </Link>
                </li>
            </ul>
            <div>
                <Link to="" onClick={signOut} className="text-danger"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;