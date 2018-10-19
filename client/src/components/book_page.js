import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {getSingleItem, clearSingleItem} from '../actions'

class BookPage extends React.Component {
    componentDidMount(){
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
            return <h1>LOADING</h1>
        }
        // console.log("Bookpage Props: ", this.props)
        const {ISBN, imageURL, title, series, author, longDescription, characterPresence} = this.props.item.data[0];
        const arrayOfCharacters = this.convertToBinaryAndThenCharacters(parseInt(characterPresence))
        const containsList = arrayOfCharacters.map((item,index)=><p key={index}>{item}</p>)
        return(
            <div id="bookpage" className="container">
                <div className="row">
                    <button className="btn left" onClick={()=>{this.props.history.goBack()}}>Back to Results</button>
                    {/* <Link className="btn left" to="/">Back To Results</Link> */}
                    <Link className="btn right" to="/">New Search</Link>
                </div>
                <div className="row">
                    <div id="book-information" className="col s3 center">
                        <img src={imageURL}/>
                        <a href={`https://www.goodreads.com/book/isbn/${ISBN}`}>Link to Goodreads</a>
                        {/* <h4>Rating</h4>
                        <p>Coming Soon</p> */}
                        <h4>Contains</h4>
                        {containsList}
                    </div>

                    <div className="col s9">
                        <h4>{title}</h4>
                        <h4>{series}</h4>
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
