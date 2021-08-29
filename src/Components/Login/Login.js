import React from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import logo from '../../images/logos/logo.png'
import './Login.css'


firebase.initializeApp(firebaseConfig);

const Login = () => {
    document.title = "Login - Creative Agency"
    const history = useHistory();
    const location = useLocation();

    const { from } = location.state || { from: { pathname: "/" } };

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)


    const provider = new firebase.auth.GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        firebase.auth().signInWithPopup(provider)
            .then(result => {
                const { displayName, photoURL, email } = result.user;
                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = result.credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                // ...

                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL
                }
                storeAuthToken()
                setLoggedInUser(signedInUser)
                // storeAuthToken()
                history.replace(from);
            }).catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });
    }

    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
        .then(function (idToken) {
            sessionStorage.setItem('token', idToken)
        }).catch(function (error) {
            // Handle error
        });
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 text-center">
                    <img className="img-fluid w-50 py-5" src={logo} alt="" />
                    <div className="loginArea p-5">
                        <button onClick={handleGoogleSignIn} id="googleLogin" className="btn form-control"><p className="m-0">Continue with Google</p></button>
                        <small className="my-2 d-block">Don't have an account? <span onClick={handleGoogleSignIn} style={{ color: 'blue', cursor: 'pointer', textDecoration: 'underline' }}>Create an account</span></small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;