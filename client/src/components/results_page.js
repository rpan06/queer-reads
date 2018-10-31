import React from 'react';
import ResultsList from './results_list';
import ResultsSearch from './results_search';
import Sidenav from './sidenav';
import logo from '../assets/images/landing-page-logo.png';

export default class LandingPage extends React.Component {
    componentDidMount(){
        let offset = 400;
        let duration = 300;
        const scrollBtn = document.querySelector('#back-to-top')
        window.addEventListener("scroll", backToTop)
        function backToTop(){
            if (window.scrollY > offset) {
                scrollBtn.style.display = "block";
                // scrollBtn.style.opacity = "1";
            } else {
                scrollBtn.style.display = "none";
                // scrollBtn.style.opacity = "0";
            }
        }
        scrollBtn.addEventListener("click", ()=>scrollToTop(duration))
        function scrollToTop(scrollDuration) {
            let scrollStep = -window.scrollY / (scrollDuration / 15),
                scrollInterval = setInterval(function(){
                if ( window.scrollY != 0 ) {
                    window.scrollBy( 0, scrollStep );
                }
                else clearInterval(scrollInterval);
            },15);
        }
    }
    render(){
        // console.log('Results Page State: ', this.props)
        return(
            <div>
                <a className="btn-floating btn-large waves-effect waves-light" id="back-to-top"><i className="material-icons">arrow_upward</i></a>
                <div className="hide-on-large-only show-on-medium-and-down center-align">
                    {/* <div className="row">
                        <img className="col s12" id="logo" src={logo}/>
                    </div> */}
                    <a href="#" data-target="slide-out" className="sidenav-trigger btn waves-effect waves-light">New Search</a>
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
