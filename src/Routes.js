import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import About from "./About/About";
import Location from "./Location/Location";
import Products from "./Product/Products";
import Home from "./Home/Home";
import Contact from "./Contact/Contact";
import SignIn from "./SignIn";
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={SignIn} />
                    <Route path="/Home" exact component={Home} />
                    <Route path="/Location" component={Location} />
                    <Route path="/Contact" component={Contact} />
                    <Route path="/About" component={About} />
                </Switch>
            </Router>
        )
    }
}
