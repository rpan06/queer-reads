import React from 'react';
import ResultsList from './results_list';
import ResultsSearch from './results_search';
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
                    <button data-target="slide-out" className="sidenav-trigger btn">Edit Search</button>
                </div>
                <ResultsSearch classes="col l3 hide-on-small-only show-on-medium-and-up" history={this.props.history}/>
                <ResultsSearch classes="sidenav col s8" history={this.props.history}/>
                <ResultsList {...this.props}/>
            </div>

        )
    }
}

// sidenav col s8 m5 l3
