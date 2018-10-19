import React from 'react';
import logo from '../assets/images/landing-page-logo.png';
import ResultsList from './results_list';
import Checkbox from './checkbox';
import RadioButtons from './radioButtons';
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
            searchType = 'all'
        }
        this.props.history.push(`/search/${searchCharPresence}/${searchType}/${search}`);
    }
    render(){
        // console.log('Results Page State: ', this.props)
        return(
            <div id="searchpage-container" className="row">
                    <div className="col s3 blue-grey lighten-5">
                        <div className="row">
                            <img className="col s12" id="logo" src={logo}/>
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
                            <button className="btn" id="search-submit">Find Books!</button>
                        </form>
                        <div>
                            <p>Contains character(s) that are:</p>
                            <p>
                                <Checkbox name="gay" text="Gay" handleChange={this.handleChange}/>
                            </p>
                            <p>
                                <Checkbox name="lesbian" text="Lesbian" handleChange={this.handleChange}/>
                            </p>
                            <p>
                                <Checkbox hname="bisexual" text="Bisexual" handleChange={this.handleChange}/>
                            </p>
                            <p>
                                <Checkbox name="trans" text="Trans" handleChange={this.handleChange}/>
                            </p>
                            <p>
                                <Checkbox name="nonbinary" text="Genderqueer/Non-binary" handleChange={this.handleChange}/>
                            </p>
                            <p>
                                <Checkbox name="intesex" text="Intersex" handleChange={this.handleChange}/>
                            </p>
                            <p>
                                <Checkbox name="asexual" text="Asexual" handleChange={this.handleChange}/>
                            </p>
                            <p>
                                <Checkbox name="aromantic" text="Aromantic" handleChange={this.handleChange}/>
                            </p>
                        </div>
                        <div>
                            <p>LGBTQ+ character(s) are:</p>
                            <p>
                                <Checkbox name="main" text="Main Character" handleChange={this.handleChange}/>
                            </p>
                            <p>
                                <Checkbox name="multiple" text="Multiple Characters" handleChange={this.handleChange}/>
                            </p>
                            <p>
                                <Checkbox name="major" text="Major Characters" handleChange={this.handleChange}/>
                            </p>
                            <p>
                                <Checkbox name="minor" text="Minor Characters" handleChange={this.handleChange}/>
                            </p>
                            <p>
                                <Checkbox name="later" text="Later in Series" handleChange={this.handleChange}/>
                            </p>
                        </div>
                    </div>
                <ResultsList {...this.props}/>
            </div>

        )
    }
}
