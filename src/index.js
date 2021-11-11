<<<<<<< HEAD
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'

ReactDOM.render(<App />, document.getElementById('App'))
=======
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./components/App";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("App")
);
>>>>>>> 1160d22 (actualizacion de react-router-dom)
