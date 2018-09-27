import React from 'react';
import logo from '../assets/images/landing-page-logo.png'

export default class LandingPage extends React.Component {
    render(){
        return(
            <div className="center container">
                    <div className="row">
                        <img className="col s12 m6 offset-m3" src={logo}/>
                    </div>
                    <form className="col s12" action="">
                        <div className="row">
                            <div className="input-field col s12 m6 offset-m3">
                                    <input type="text" className="validate"/>
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
                                <label>
                                        <input type="radio" name="search-radio" value=""/>
                                        <span>genre</span>
                                </label>
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
                                                <input type="checkbox" className="filled-in" name="" value=""/>
                                                <span>Gay</span>
                                        </label>
                                        <label>
                                                <input type="checkbox" name="" value=""/>
                                                <span>Lesbian</span>
                                        </label>
                                        <label>
                                                <input type="checkbox" name="" value=""/>
                                                <span>Bisexual</span>
                                        </label>
                                    </div>
                                    <div className="row">
                                        <label>
                                                <input type="checkbox" name="" value=""/>
                                                <span>Trans</span>
                                        </label>
                                        <label>
                                                <input type="checkbox" name="" value=""/>
                                                <span>Genderqueer/Non-binary</span>
                                        </label>
                                    </div>
                                    <div className="row">
                                        <label>
                                                <input type="checkbox" name="" value=""/>
                                                <span>Intersex</span>
                                        </label>
                                        <label>
                                                <input type="checkbox" name="" value=""/>
                                                <span>Asexual</span>
                                        </label>
                                        <label>
                                                <input type="checkbox" name="" value=""/>
                                                <span>Aromatic</span>
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <p>LGBTQ+ character(s) are:</p>
                                    <div className="row">
                                        <label>
                                                <input type="checkbox" name="" value=""/>
                                                <span>Main Character</span>
                                        </label>
                                        <label>
                                                <input type="checkbox" name="" value=""/>
                                                <span>Later in Series</span>
                                        </label>
                                    </div>
                                    <div className="row">
                                        <label>
                                                <input type="checkbox" name="" value=""/>
                                                <span>Major Characters</span>
                                        </label>
                                        <label>
                                                <input type="checkbox" name="" value=""/>
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
