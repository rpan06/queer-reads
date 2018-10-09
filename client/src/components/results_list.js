import React from 'react';
import ResultsCard from './results_card';
import { connect } from 'react-redux';
import {getResultsData} from '../actions/index'

class List extends React.Component {
    componentDidMount(){
        this.props.getResultsData(this.props.match.params.filter);
    }
    render(){
        // console.log("Results List Props: ", this.props)
        let list = this.props.results.map((item, index)=>{
            return <ResultsCard key={index} item={item}/>
        })
        return (
            <div className="col s9">
                {list}
            </div>
        )
    }
}


function mapStateToProps(state){
    return {
        results: state.list.results
    }
}

export default connect(mapStateToProps, {getResultsData})(List)
