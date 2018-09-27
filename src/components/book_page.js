import React from 'react';

export default class BookPage extends React.Component {
    render(){
        // const {Title,series,author,imageUrl,shortDescription} = this.props.item
        return(
            <div id="bookpage" className="container">
                <div className="row">
                    <button className="btn right">New Search</button>
                </div>
                <div className="row">
                    <div id="book-information" className="col s3 center">
                        <img src="./images/7235533.jpg"/>
                        <h4>Rating</h4>
                        <p>4.65 stars</p>

                        <h4>Contains</h4>
                        <p>Gay</p>
                        <p>Lesbian</p>
                        <p>Bisexual</p>
                        <p>Multiple Characters</p>
                    </div>

                    <div className="col s9">
                        <h4>The Way of Kings</h4>
                        <h4>(The Stormlight Archive, #1)</h4>
                        <h4>by Brandon Sanderson</h4>
                        <br/>
                        <p>From #1 New York Times bestselling author Brandon Sanderson, The Way of Kings, Book One of the Stormlight Archive begins an incredible new saga of epic proportion.</p>
                        <p>Roshar is a world of stone and storms. Uncanny tempests of incredible power sweep across the rocky terrain so frequently that they have shaped ecology and civilization alike. Animals hide in shells, trees pull in branches, and grass retracts into the soilless ground. Cities are built only where the topography offers shelter.</p>
                    </div>
                </div>
            </div>
        )
    }
}
