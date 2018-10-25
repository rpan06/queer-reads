import React from 'react';
import ResultsList from './results_list';
import ResultsSearch from './results_search';
import Sidenav from './sidenav';
import logo from '../assets/images/landing-page-logo.png';

export default class LandingPage extends React.Component {
    render(){
        // console.log('Results Page State: ', this.props)
        return(
            <div>
                <div className="hide-on-large-only show-on-medium-and-down center-align">
                    {/* <div className="row">
                        <img className="col s12" id="logo" src={logo}/>
                    </div> */}
                    <a href="#" data-target="slide-out" className="sidenav-trigger btn">New Search</a>
                </div>
                <div id="searchpage-container" className="row">
                    <ResultsSearch classes="col l3 hide-on-med-and-down show-on-large-only" history={this.props.history}/>
                    <Sidenav history={this.props.history}/>
                    <ResultsList {...this.props}/>
                </div>
            </div>


        )
    }
}
