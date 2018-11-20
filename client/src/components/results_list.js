import React from 'react';
import ResultsCard from './results_card';
import LoadingSpinner from './loading_spinner'
import { connect } from 'react-redux';
import {getResultsData, clearResults} from '../actions/index'

class List extends React.Component {
    state = {
        pathname: ''
    }
    componentDidMount(){
        this.props.getResultsData(this.props.match.params.filter);
        // var elems = document.querySelectorAll('.dropdown-trigger');
        // var instances = M.Dropdown.init(elems);
    }
    componentDidUpdate(){
        if(this.props.location.pathname === this.state.pathname){
            return
        }
        this.props.clearResults();
        this.props.getResultsData(this.props.match.params.filter);
        this.setState({
            pathname: this.props.location.pathname
        })
    }
    componentWillUnmount(){
        this.props.clearResults();
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
                <LoadingSpinner/>
            )
        }
        // console.log("Results List Props: ", this.props)
        let results = this.filterData(this.props.results.data)
        let list = results.map((item, index)=>{
            return <ResultsCard key={index} item={item} history={this.props.history}/>
        })
        return (
            <div className="col l9 m12 s12">
                {/* <a class='dropdown-trigger btn' href='#' data-target='dropdown1'>Drop Me!</a>
                <ul id='dropdown1' class='dropdown-content'>
                    <li><a href="#!">one</a></li>
                    <li><a href="#!">two</a></li>
                    <li class="divider" tabindex="-1"></li>
                    <li><a href="#!">three</a></li>
                    <li><a href="#!"><i class="material-icons">view_module</i>four</a></li>
                    <li><a href="#!"><i class="material-icons">cloud</i>five</a></li>
                </ul> */}
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

export default connect(mapStateToProps, {getResultsData, clearResults})(List)
