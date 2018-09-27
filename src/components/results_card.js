import React from 'react';
import dummydata from '../dummy_data/dummydata'

export default class ResultsCard extends React.Component {
    render(){
        const {Title,series,author,imageUrl,shortDescription} = this.props.item
        console.log(imageURL)
        return (
            <div className="card horizontal brown lighten-5">
                <div className="card-image">
                    <img src={imageURL}/>
                </div>
                <div className="card-stacked">
                    <div className="card-content">
                        <h5>{Title} {series}</h5>
                        <p>by {author}</p><br/>
                        <p>{shortDescription}</p>
                    </div>
                </div>
            </div>
        )
    }
}
