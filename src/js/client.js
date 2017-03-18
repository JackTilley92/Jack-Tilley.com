import React from "react";
import ReactDOM from "react-dom";

import Home from "./components/Home";
import Projects from "./components/Projects";


import injectTapEventPlugin from 'react-tap-event-plugin';

import { Router, Route, Link } from 'react-router'

import * as firebase from "firebase";

// Initialize Firebase
var config = {
  apiKey: "<API_KEY>",
  authDomain: "<PROJECT_ID>.firebaseapp.com",
  databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
  storageBucket: "<BUCKET>.appspot.com",
};

firebase.initializeApp(config);
injectTapEventPlugin();



const app = document.getElementById('app');
ReactDOM.render(
  <Router>
      <Route path="/" component={Home}>
      </Route>
  </Router>
,app);
