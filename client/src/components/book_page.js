import React from 'react';
import BookPageInfoModal from './book_page_info_modal'
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {getSingleItem, clearSingleItem} from '../actions'
import Sidenav from './sidenav'

import ResultsSearch from './results_search';


class BookPage extends React.Component {
    componentDidMount(){
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems);
        this.props.getSingleItem(this.props.match.params.ISBN);
    }
    componentWillUnmount(){
        this.props.clearSingleItem();
    }
    convertToBinaryAndThenCharacters(num){
        const characterArray = ['Gay', 'Lesbian', 'Bisexual', 'Trans', 'Non-binary', 'Intersex', 'Asexual', 'Aromantic', 'Multiple Characters', 'Main Characters', 'Major Characters', 'Minor Characters', 'Later in Series']
        let binary = num.toString(2).split("")
        let output = [];
        for (let index = 0; index < binary.length; index++){
            if (parseInt(binary[index])){ //binary[index] === '1'
            output.push(characterArray[index])
            }
        }
        return output
    }
    render(){
        if(typeof this.props.item.data === 'undefined'){
            return(
                <div className="loading-container">
                    <span className="loading-spinner"></span>
                </div>
            )
        }
        console.log("Bookpage Props: ", this.props)
        const {ISBN, imageURL, title, series, author, rating, format, genre, longDescription, characterPresence} = this.props.item.data[0];
        const arrayOfCharacters = this.convertToBinaryAndThenCharacters(parseInt(characterPresence))
        const containsList = arrayOfCharacters.map((item,index)=><p key={index}>{item}</p>)
        return(
            <div id="bookpage" className="container">
                <div className="row">
                    <button className="btn left bookpageButton" onClick={()=>{this.props.history.goBack()}}>Back to Results</button>
                    <Link className="btn right bookpageButton" to="/">New Search</Link>
                    {/* <button data-target="slide-out" className="sidenav-trigger btn right">New Search</button>
                    <Sidenav history={this.props.history}/> */}
                </div>

                {/* <ResultsSearch classes="sidenav col s8" history={this.props.history}/> */}
                <div className="book-information col s12 center hide-on-med-and-up show-on-small">
                    <img src={imageURL}/>
                    <BookPageInfoModal {...this.props.item.data[0]} containsList={containsList}/>
                </div>

                <div className="row">
                    <div className="book-information col m3 center hide-on-small-only show-on-medium-and-up">
                        <img src={imageURL}/>
                        <a href={`https://www.goodreads.com/book/isbn/${ISBN}`}>Link to Goodreads</a>
                        <h4>Rating</h4>
                        {rating}
                        <h4>Format</h4>
                        {format}
                        <h4>Genre</h4>
                        {genre}
                        <h4>Contains</h4>
                        {containsList}
                    </div>

                    <div className="col m9 s12">
                        <h3>{title}</h3>
                        {series === '-' ? '' : <h4>{series}</h4>}
                        <h4>by {author}</h4>
                        <br/>
                        <p dangerouslySetInnerHTML={{__html: longDescription}}/>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        item: state.list.single
    }
}

export default connect(mapStateToProps, {getSingleItem, clearSingleItem})(BookPage)
