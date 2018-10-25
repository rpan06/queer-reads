import React from 'react';
import ResultsCard from './results_card';
import { connect } from 'react-redux';
import {getResultsData} from '../actions/index'

class List extends React.Component {
    state = {
        pathname: ''
    }
    componentDidMount(){
        this.props.getResultsData(this.props.match.params.filter);
    }
    componentDidUpdate(){
        if(this.props.location.pathname === this.state.pathname){
            return
        }
        this.props.getResultsData(this.props.match.params.filter);
        this.setState({
            pathname: this.props.location.pathname
        })
    }
    filterData(data){
        let {text, type} = this.props.match.params;
        if(text === '0'){
            return data
        }
        text = text.toLowerCase();
        let filteredData;
        if(type === 'all'){
            filteredData = data.filter(item => item.title.toLowerCase().includes(text) || item.author.toLowerCase().includes(text))
        } else { //for type = author/title options
            filteredData = data.filter(item => item[type].toLowerCase().includes(text))
        }
        return filteredData;
    }
    render(){
        if(typeof this.props.results.data === 'undefined'){
            return(
                <div className="loading-container">
                    <span className="loading-spinner"></span>
                </div>
            )
        }
        // console.log("Results List Props: ", this.props)
        let results = this.filterData(this.props.results.data)
        let list = results.map((item, index)=>{
            return <ResultsCard key={index} item={item}/>
        })
        return (
            <div className="col l9 m12 s12">
                {list.length ? list : <h1>No Results</h1>}
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
