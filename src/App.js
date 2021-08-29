import React, { createContext } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Error from './Components/Error/Error';
import AddService from './Components/Dashboard/AddService/AddService';
import Review from './Components/Dashboard/Review/Review';
import Login from './Components/Login/Login';
import { useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Order from './Components/Dashboard/Order/Order';
import MakeAdmin from './Components/Dashboard/MakeAdmin/MakeAdmin';
import ServiceList from './Components/Dashboard/ServiceList/ServiceList';
import { useEffect } from 'react';
import * as firebase from "firebase/app";
import UserOrderHistory from './Components/Dashboard/UserOrderHistory/UserOrderHistory';
export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState([])
  const [newAdmin, setNewAdmin] = useState(false)
  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        const signedInUser = {
          isSignedIn: true,
          name: user.displayName,
          email: user.email,
          photo: user.photoURL
        }
        setLoggedInUser(signedInUser)
      } else {
        // No user is signed in.
      }
    });
  }, [])

  const [isAdmin, setIsAdmin] = useState([])
  useEffect(() => {
    // fetch(`https://afternoon-sands-85438.herokuapp.com/admins?email=${loggedInUser.email}`)
    fetch(`https://afternoon-sands-85438.herokuapp.com/admins`)
      .then(res => res.json())
      .then(data => {
        setIsAdmin(data)
      }
      )
  }, [])
  useEffect(() => {

    fetch(`https://afternoon-sands-85438.herokuapp.com/admins`)
      .then(res => res.json())
      .then(data => {
        const checkAdmin = data.filter(admin => admin.email === loggedInUser.email)
        // console.log(checkAdmin == )
        if (checkAdmin.length === 1) {
          setNewAdmin(true)
        }
      }
      )
  }, [loggedInUser])
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser, newAdmin, setNewAdmin]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute exact path="/dashboard/addService">
            <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute exact path="/dashboard/review">
            <Review></Review>
          </PrivateRoute>
          <PrivateRoute exact path="/dashboard/order/:serviceName">
            <Order></Order>
          </PrivateRoute>
          {
            newAdmin ? 
            <PrivateRoute exact path="/dashboard">
              <ServiceList></ServiceList>
            </PrivateRoute> : <PrivateRoute exact path="/dashboard">
                <UserOrderHistory></UserOrderHistory>
              </PrivateRoute>
          }
          <PrivateRoute exact path="/dashboard/order">
            <Order></Order>
          </PrivateRoute>

          <PrivateRoute exact path="/dashboard/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </PrivateRoute>

          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
