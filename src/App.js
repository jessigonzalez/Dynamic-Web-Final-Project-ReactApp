import "./App.css";
import React, {useEffect, useState} from 'react';
import {Route, BrowserRouter as Router, Redirect} from "react-router-dom";
import logo from './logoGall.png';

import Header from "./components/Header";
import Login from "./pages/Login";
import Logout from "./pages/Logout/index.js";
import Signup from "./pages/Signup";
import UserProfile from "./pages/UserProfile";
import Home from "./pages/Home";
import CreateUserForm from "./components/CreateUserForm";

import  AppHeader from "./components/AppHeader/index.js";

import * as firebase from 'firebase/app';
import "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyBw3nP4y6hmbzpbp61EOCP3qiCs_6FD5ns",
    authDomain: "finalprojectgall.firebaseapp.com",
    databaseURL: "https://finalprojectgall.firebaseio.com",
    projectId: "finalprojectgall",
    storageBucket: "finalprojectgall.appspot.com",
    messagingSenderId: "495947876630",
    appId: "1:495947876630:web:646ca408298e2fd77da837"
};

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
    }
    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .catch(function(error) {
        console.log('error', error);
      });
    }, [firebaseConfig]);

  useEffect(() => {
    firebase
      .auth()
      .onAuthStateChanged(function(user) {
        if(user) {
          setLoggedIn(true);
          setUser(user);
        }
        else{
          setLoggedIn(false);
          setUser({});
        }
      });
  },[]);

  function signupFunction(e){
    e.preventDefault();
    //let email = 'bab619@nyu.edu'
    //let password = 'Dreamsmadereal1997!'
    let email = e.currentTarget.createEmail.value;
    let password = e.currentTarget.createPassword.value;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email,password)
      .then(function(response){
        setLoggedIn(true);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  function loginFunction(e){
    e.preventDefault();
    let email= e.currentTarget.loginEmail.value;
    let password = e.currentTarget.loginPassword.value;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(function(response) {
        setLoggedIn(true);
      })
      .catch(function(error) {
        console.log('error', error);
      });
  }
  function logoutFunction(){
    firebase
      .auth()
      .signOut()
      .then(function(){
        setLoggedIn(false);
      })
      .catch(function(error){
        console.log('error',error);
      });
  }
  return (
    <div className="App">
      <Header loggedIn={loggedIn} logoutFunction={logoutFunction}/>

        <Router>
          <Route path="/">
            { loggedIn ? <UserProfile user={user}/> : <Redirect to="login"/>}
          </Route>

          <Route path="/profile">
            { !loggedIn ? <UserProfile user={user}/> : <Redirect to="UserProfile"/>}
          </Route>

          <Route exact path="/login">
            {loggedIn ? <Redirect to="/"/> : <Login loginFunction={loginFunction} />}
          </Route>

          <Route exact path="/sign-up">
            {loggedIn ? <Redirect to="/"/> : <Signup signupFunction={signupFunction} />}
          </Route>
        </Router>
        <AppHeader>GALL</AppHeader>
    </div>
  );
}

//<img src={logo} style={{paddingTop:"100px", marginLeft:"-200px"}} height={50} width={50} className="img-responsive"/>
//<h2 style={{ textAlign:"center", marginLeft:"200px", paddingBottom:"140px"}}> GALL</h2>
