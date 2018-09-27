import React from 'react';
import '../assets/css/app.css';
import 'materialize-css/dist/css/materialize.min.css'
import LandingPage from './landing_page';
import ResultsPage from './results_page'
import BookPage from './book_page'
import {Route, Switch} from 'react-router-dom';
import NotFound from "./not_found"

const App = () => (
    <div>
        <Switch>
            <Route exact path="/" component={LandingPage}/>
            {/* <Route path="/add-item" component={AddItem}/> */}
            <Route path="/book/:ISBN" component={BookPage}/>
            <Route component={NotFound}/>
        </Switch>
    </div>
);

export default App;
