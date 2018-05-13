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

var Sketch = React.createClass({
  render: function() {
    return React.createElement('svg', {
      width: '640',
      height: '480'
    }, React.createElement('circle', {
      cx: '50',
      cy: '50',
      r: '40',
      stroke: 'black',
      fill: 'white'
    }));
  }
});

firebase.initializeApp(config);
injectTapEventPlugin();

const app = document.getElementById('app');
ReactDOM.render(
  <Router>
      <Route path="/" component={Home}>
        React.createElement(Sketch)
      </Route>
  </Router>
,app);
