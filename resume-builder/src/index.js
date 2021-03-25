import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LandingPage from '../src/components/LandingPage/LandingPage.js';
import PdfComponent from '../src/components/PdfComponent/PdfComponent';
import FormLanding from '../src/components/FormLanding/FormLanding.js';
import ChooseTemplatePage from '../src/components/ChooseTemplatePage/ChooseTemplatePage.js';
import reportWebVitals from './reportWebVitals';
import store from '../src/redux/store';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/template">
            <ChooseTemplatePage />
          </Route>
          <Route path="/form">
            <FormLanding />
          </Route>
          <Route path="/pdf">
            <PdfComponent />
          </Route>
        </Switch>
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();