import React from 'react';
import ResultsCard from './results_card';
import { connect } from 'react-redux';
import {getResultsData} from '../actions/index'

class List extends React.Component {
    state = {
        path: ''
    }
    componentDidMount(){
        this.props.getResultsData(this.props.match.params.filter);
    }
    componentDidUpdate(){
        if(this.props.location.path === this.state.path){
            return
        }
        this.props.getResultsData(this.props.match.params.filter);
        this.setState({
            path: this.props.location.path
        })
    }
    filterData(data){
        let {text, type} = this.props.match.params;
        if(text === '0'){
            return data
        }
        text = text.toLowerCase();
        let filteredData;
        if(type === '0' || type === 'all'){
            filteredData = data.filter(item => item.title.toLowerCase().includes(text) || item.author.toLowerCase().includes(text))
        } else { //for type = author/title options
            filteredData = data.filter(item => item[type].toLowerCase().includes(text))
        }
        return filteredData;
    }
    render(){
        if(typeof this.props.results.data === 'undefined'){
            return <h1>LOADING</h1>
        }
        console.log("Results List Props: ", this.props)
        let results = this.filterData(this.props.results.data)
        let list = results.map((item, index)=>{
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
