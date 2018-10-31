import React from 'react';
import logo from '../assets/images/landing-page-logo.png';
import Checkbox from './checkbox';
import RadioButtons from './radioButtons';
import convertSearchToBitwise from '../helper/convertSearchToBitwise'
import {Link} from 'react-router-dom'

export default class ResultsSearch extends React.Component {
    state = {
        search: '',
        searchType: '',
        gay: false,
        lesbian: false,
        bisexual: false,
        trans: false,
        nonbinary: false,
        intersex: false,
        asexual: false,
        aromantic: false,
        main: false,
        multiple: false,
        major: false,
        minor: false,
        later: false
    }
    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        let searchCharPresence = convertSearchToBitwise(this.state)
        let {search, searchType} = this.state
        if(search === ''){
            search = '0'
        }
        if(searchType === ''){
            searchType = 'all'
        }
        if(this.props.closeModal){
            this.props.closeModal();
        }
        this.props.history.push(`/search/${searchCharPresence}/${searchType}/${search}`);
    }
    render(){
        return (
            <div className={`${this.props.classes} blue-grey lighten-5 results-search`}>
                <div className="row">
                    <Link to="/"><img className="col s12" id="logo" src={logo}/></Link>
                </div>
                <form onSubmit={this.handleSubmit} className="center" action="">
                    <input
                        type="text"
                        id="search-input"
                        name="search"
                        className="validate"
                        value={this.state.search}
                        onChange={this.handleChange}
                        placeholder="Search"/>
                    <div>
                        <RadioButtons value="all" handleChange={this.handleChange}/>
                        <RadioButtons value="title" handleChange={this.handleChange}/>
                        <RadioButtons value="author" handleChange={this.handleChange}/>
                    </div>
                    <button className="btn waves-effect waves-light" id="search-submit">Find Books!</button>
                </form>
                <div>
                    <p>Contains character(s) that are:</p>
                        <Checkbox classes="col s12" name="gay" text="Gay" handleChange={this.handleChange}/>
                        <Checkbox classes="col s12" name="lesbian" text="Lesbian" handleChange={this.handleChange}/>
                        <Checkbox classes="col s12" name="bisexual" text="Bisexual" handleChange={this.handleChange}/>
                        <Checkbox classes="col s12" name="trans" text="Trans" handleChange={this.handleChange}/>
                        <Checkbox classes="col s12" name="nonbinary" text="Genderqueer/Non-binary" handleChange={this.handleChange}/>
                        <Checkbox classes="col s12" name="intesex" text="Intersex" handleChange={this.handleChange}/>
                        <Checkbox classes="col s12" name="asexual" text="Asexual" handleChange={this.handleChange}/>
                        <Checkbox classes="col s12" name="aromantic" text="Aromantic" handleChange={this.handleChange}/>
                    <p>LGBTQ+ character(s) are:</p>
                        <Checkbox classes="col s12" name="main" text="Main Character" handleChange={this.handleChange}/>
                        <Checkbox classes="col s12" name="multiple" text="Multiple Characters" handleChange={this.handleChange}/>
                        <Checkbox classes="col s12" name="major" text="Major Characters" handleChange={this.handleChange}/>
                        <Checkbox classes="col s12" name="minor" text="Minor Characters" handleChange={this.handleChange}/>
                        <Checkbox classes="col s12" name="later" text="Later in Series" handleChange={this.handleChange}/>
                </div>
            </div>
        )
    }
}
