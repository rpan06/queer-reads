import React from 'react';
import ResultsSearch from './results_search';

export default class Sidenav extends React.Component {
    componentDidMount(){
        M.Sidenav.init(this.sidenav);
    }
    closeModal=()=>{
        M.Sidenav.init(this.sidenav).close();
    }
    render(){
        return (
            <div ref={e => this.sidenav = e} className="sidenav col s8 blue-grey lighten-5" id="slide-out">
                <ResultsSearch closeModal={this.closeModal} classes="" history={this.props.history}/>
            </div>
        )
    }
}
