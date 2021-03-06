import React from 'react';
import '../assets/css/app.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js'
import LandingPage from './landing_page';
import ResultsPage from './results_page'
import BookPage from './book_page'
import {Route, Switch} from 'react-router-dom';
import NotFound from "./not_found"

const App = () => (
    <div>
        <Switch>
            <Route exact path="/" component={LandingPage}/>
            <Route exact path="/search/:filter/:type/:text" component={ResultsPage}/>
            <Route path="/book/:ISBN" component={BookPage}/>
            <Route component={NotFound}/>
        </Switch>
    </div>
);

export default App;
