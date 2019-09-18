import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import City from "./components/CityPage.js";
import Home from "./components/home.js";
import CitizienshipPage from './components/citizienship.js';
import AboutUs from './components/AboutUsPage.js';
import GastronomyPage from './components/GastronomyPage.js'
import GuidePage from './components/GuidePage';
import ContactUsPage from './components/ContactUsPage';
import PropertyPage from './components/PropertyPage.js';
import ListPage from './components/ListPage';

const routing = (
    <Router>
        <Route exact path="/home" component={Home} />
        <Route path="/city" component={City} />
        <Route path="/citizienship" component={CitizienshipPage} />
        <Route path="/property" component={PropertyPage} />
        <Route path="/AboutUs" component={AboutUs} />
        <Route path="/Gastronomy" component={GastronomyPage} />
        <Route path="/Guide" component={GuidePage} />
        <Route path="/ContactUs" component={ContactUsPage} />
        <Route path="/List" component={ListPage} />
    </Router>
)


ReactDOM.render(routing,  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
