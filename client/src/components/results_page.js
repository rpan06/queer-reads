import React from 'react';
import logo from '../assets/images/landing-page-logo.png';
import ResultsList from './results_list'

export default class LandingPage extends React.Component {
    render(){
        return(
            <div id="searchpage-container" className="row">
                    <div className="col s3 blue-grey lighten-5">
                        <div className="row">
                            <img className="col s12" id="logo" src={logo}/>
                        </div>
                        <form className="center" action="">
                            <input type="text" name="search" placeholder="Search"/>
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
                            <button className="btn" id="search-submit">Find Books!</button>
                        </form>
                        <div>
                            <p>Contains character(s) that are:</p>
                            <p>
                            <label>
                                    <input type="checkbox" className="filled-in" name="" value=""/>
                                    <span>Gay</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                    <input type="checkbox" name="" value=""/>
                                    <span>Lesbian</span>
                            </label>
                            </p>
                            <p>
                            <label>
                                    <input type="checkbox" name="" value=""/>
                                    <span>Bisexual</span>
                            </label>
                            </p>
                            <p>
                            <label>
                                    <input type="checkbox" name="" value=""/>
                                    <span>Trans</span>
                            </label>
                            </p>
                            <p>
                            <label>
                                    <input type="checkbox" name="" value=""/>
                                    <span>Genderqueer/Non-binary</span>
                            </label>
                            </p>
                            <p>
                            <label>
                                    <input type="checkbox" name="" value=""/>
                                    <span>Intersex</span>
                            </label>
                            </p>
                            <p>
                            <label>
                                    <input type="checkbox" name="" value=""/>
                                    <span>Asexual</span>
                            </label>
                            </p>
                            <p>
                            <label>
                                    <input type="checkbox" name="" value=""/>
                                    <span>Aromatic</span>
                            </label>
                            </p>
                        </div>
                        <div>
                            <p>LGBTQ+ character(s) are:</p>
                            <p>
                                <label>
                                        <input type="checkbox" name="" value=""/>
                                        <span>Main Character</span>
                                </label>
                            </p>
                            <p>
                                <label>
                                        <input type="checkbox" name="" value=""/>
                                        <span>Later in Series</span>
                                </label>
                            </p>
                            <p>
                                <label>
                                        <input type="checkbox" name="" value=""/>
                                        <span>Major Characters</span>
                                </label>
                            </p>
                            <p>
                                <label>
                                        <input type="checkbox" name="" value=""/>
                                        <span>Minor Characters</span>
                                </label>
                                </p>
                        </div>
                    </div>
                <ResultsList {...this.props}/>
            </div>

        )
    }
}
