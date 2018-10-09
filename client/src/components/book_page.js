import React from 'react';
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
        // console.log("Bookpage Props: ", this.props.item)
        const {imageURL, title, series, author, longDescription, characterPresence} = this.props.item;
        const arrayOfCharacters = this.convertToBinaryAndThenCharacters(parseInt(characterPresence))
        const containsList = arrayOfCharacters.map((item,index)=><p key={index}>{item}</p>)
        return(
            <div id="bookpage" className="container">
                <div className="row">
                    <button className="btn right">New Search</button>
                </div>
                <div className="row">
                    <div id="book-information" className="col s3 center">
                        <img src={imageURL}/>
                        <h4>Rating</h4>
                        <p>4.65 stars</p>

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
