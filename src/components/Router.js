import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import StorePicker from "./StorePicker";
import App from "./App";
import NotFound from "./NotFound";

// Everything in React is a component, even the Router is a component.
// The switch tag 

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={StorePicker} />
            <Route exact path="/store/:storeId" component={App} />
            <Route exact path="/notfound" component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default Router;