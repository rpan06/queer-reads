import React from 'react';
import logo from '../assets/images/landing-page-logo.png'
import Checkbox from './checkbox'
import RadioButtons from './radioButtons'
import convertSearchToBitwise from '../helper/convertSearchToBitwise'

export default class LandingPage extends React.Component {
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
            searchType = '0'
        }
        this.props.history.push(`/search/${searchCharPresence}/${searchType}/${search}`);
    }

    render(){
        console.log('Landing Page State: ', this.state)
        return(
            <div className="center container">
                    <div className="row">
                        <img className="col s12 m6 offset-m3" src={logo}/>
                    </div>
                    <form onSubmit={this.handleSubmit} className="col s12" action="">
                        <div className="row">
                            <div className="input-field col s12 m6 offset-m3">
                                    <input
                                        type="text"
                                        id="search-input"
                                        name="search"
                                        className="validate"
                                        value={this.state.search}
                                        onChange={this.handleChange}
                                        placeholder="Search"/>
                                    {/* <label className="active" htmlFor="search-input">Search</label> */}
                            </div>
                        </div>
                        <div className="row">
                            <RadioButtons value="all" handleChange={this.handleChange}/>
                            <RadioButtons value="title" handleChange={this.handleChange}/>
                            <RadioButtons value="author" handleChange={this.handleChange}/>
                        </div>
                        <button className="btn">Find Books!</button>
                    </form>
                    <div className="row">
                        <div className="col s12 m8 offset-m2">
                            <div className="card-panel blue-grey lighten-5" id="advanced-options">
                                <div>
                                    <p>Contains character(s) that are:</p>
                                    <div className="row">
                                       <Checkbox name="gay" text="Gay" handleChange={this.handleChange}/>
                                       <Checkbox name="lesbian" text="Lesbian" handleChange={this.handleChange}/>
                                       <Checkbox hname="bisexual" text="Bisexual" handleChange={this.handleChange}/>
                                    </div>
                                    <div className="row">
                                        <Checkbox name="trans" text="Trans" handleChange={this.handleChange}/>
                                        <Checkbox name="nonbinary" text="Genderqueer/Non-binary" handleChange={this.handleChange}/>
                                    </div>
                                    <div className="row">
                                        <Checkbox name="intesex" text="Intersex" handleChange={this.handleChange}/>
                                        <Checkbox name="asexual" text="Asexual" handleChange={this.handleChange}/>
                                        <Checkbox name="aromantic" text="Aromantic" handleChange={this.handleChange}/>
                                    </div>
                                </div>
                                <div>
                                    <p>LGBTQ+ character(s) are:</p>
                                    <div className="row">
                                        <Checkbox name="main" text="Main Character" handleChange={this.handleChange}/>
                                        <Checkbox name="multiple" text="Multiple Characters" handleChange={this.handleChange}/>
                                    </div>
                                    <div className="row">
                                        <Checkbox name="major" text="Major Characters" handleChange={this.handleChange}/>
                                        <Checkbox name="minor" text="Minor Characters" handleChange={this.handleChange}/>
                                    </div>
                                    <div className="row">
                                        <Checkbox name="later" text="Later in Series" handleChange={this.handleChange}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}
