import React from 'react';
import {Link} from 'react-router-dom';

export default class ResultsCard extends React.Component {
    render(){
        let {title,author,imageURL,shortDescription,ISBN} = this.props.item
        shortDescription += '...'
        return (
            <div className="card horizontal brown lighten-5">
                <div className="card-image">
                    <img src={imageURL}/>
                </div>
                <div className="card-stacked">
                    <div className="card-content">
                        <Link to={`/book/${ISBN}`}>{title}</Link>
                        <p>by {author}</p><br/>
                        <p dangerouslySetInnerHTML={{__html: shortDescription}}/>
                    </div>
                </div>
            </div>
        )
    }
}
