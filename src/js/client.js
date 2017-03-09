import React from "react";
import ReactDOM from "react-dom";

import Layout from "./components/Layout";
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

require('./module1.js');
require('./module2.js');

const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app);
