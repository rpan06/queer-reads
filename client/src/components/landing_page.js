import React from 'react';
import logo from '../assets/images/landing-page-logo.png'

export default class LandingPage extends React.Component {
    state = {
        value: ''
    }
    handleChange = (event) => {
        this.setState({
            value: event.target.value
        })
    }
    handleSubmit = (event) => {
        console.log("handleSubmit: ",event)
        event.preventDefault();
        //collect all of the checked box values
        //history push to results page
        //propogate results page function
    }
    render(){
        return(
            <div className="center container">
                    <div className="row">
                        <img className="col s12 m6 offset-m3" src={logo}/>
                    </div>
                    <form onSubmit={this.handleSubmit} className="col s12" action="">
                        <div className="row">
                            <div className="input-field col s12 m6 offset-m3">
                                    <input type="text" id="search-input" className="validate" />
                                    {/* value={this.state.value} onChange={this.handleChange} */}
                                    <label htmlFor="search-input">Search</label>
                            </div>
                        </div>
                        <div className="row">
                            <div>
                                <label>
                                    <input type="radio" name="search-radio" value=""/>
                                    <span>all</span>
                                </label>
                                <label>
                                        <input type="radio" name="search-radio" value=""/>
                                        <span>title</span>
                                </label>
                                <label>
                                        <input type="radio" name="search-radio" value=""/>
                                        <span>author</span>
                                </label>
                                {/* <label>
                                        <input type="radio" name="search-radio" value=""/>
                                        <span>genre</span>
                                </label> */}
                            </div>
                        </div>
                        <button className="btn">Find Books!</button>
                    </form>
                    <div className="row">
                        <div className="col s12 m8 offset-m2">
                            <div className="card-panel blue-grey lighten-5" id="advanced-options">
                                <div>
                                    <p>Contains character(s) that are:</p>
                                    <div className="row">
                                        <label>
                                                <input type="checkbox" className="filled-in" name="gay" value="gay"/>
                                                <span>Gay</span>
                                        </label>
                                        <label>
                                                <input type="checkbox" name="lesbian" value="lesbian"/>
                                                <span>Lesbian</span>
                                        </label>
                                        <label>
                                                <input type="checkbox" name="bisexual" value="bisexual"/>
                                                <span>Bisexual</span>
                                        </label>
                                    </div>
                                    <div className="row">
                                        <label>
                                                <input type="checkbox" name="trans" value="trans"/>
                                                <span>Trans</span>
                                        </label>
                                        <label>
                                                <input type="checkbox" name="nonbinary" value="nonbinary"/>
                                                <span>Genderqueer/Non-binary</span>
                                        </label>
                                    </div>
                                    <div className="row">
                                        <label>
                                                <input type="checkbox" name="intersex" value="intersex"/>
                                                <span>Intersex</span>
                                        </label>
                                        <label>
                                                <input type="checkbox" name="asexual" value="asexual"/>
                                                <span>Asexual</span>
                                        </label>
                                        <label>
                                                <input type="checkbox" name="aromantic" value="aromantic"/>
                                                <span>Aromantic</span>
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <p>LGBTQ+ character(s) are:</p>
                                    <div className="row">
                                        <label>
                                                <input type="checkbox" name="main" value="main"/>
                                                <span>Main Character</span>
                                        </label>
                                        <label>
                                                <input type="checkbox" name="later" value="later"/>
                                                <span>Later in Series</span>
                                        </label>
                                    </div>
                                    <div className="row">
                                        <label>
                                                <input type="checkbox" name="major" value="major"/>
                                                <span>Major Characters</span>
                                        </label>
                                        <label>
                                                <input type="checkbox" name="minor" value="minor"/>
                                                <span>Minor Characters</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}
