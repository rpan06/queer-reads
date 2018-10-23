import React from 'react';
import ResultsList from './results_list';
import ResultsSearch from './results_search';
import Sidenav from './sidenav'
export default class LandingPage extends React.Component {

    componentDidMount(){
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems);
    }

    render(){
        // console.log('Results Page State: ', this.props)
        return(
            <div id="searchpage-container" className="row">
                <div className="row left hide-on-med-and-up show-on-small">
                    <a href="#" data-target="slide-out" className="sidenav-trigger btn">New Search</a>
                </div>
                <ResultsSearch classes="col m3 hide-on-small-only show-on-medium-and-up" history={this.props.history}/>
                <Sidenav history={this.props.history}/>
                <ResultsList {...this.props}/>
            </div>

        )
    }
}

// sidenav col s8 m5 l3
