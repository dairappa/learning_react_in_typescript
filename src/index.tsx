import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, {Recipes} from './App';
import * as serviceWorker from './serviceWorker';
import {recipes} from "./data/recipe";
import ColorApp from "./ColorApp";
import {colorData} from "./data/color";



ReactDOM.render(
  <React.StrictMode>
      <ColorApp />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
