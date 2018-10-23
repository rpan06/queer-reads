import React from 'react';
import {Link} from 'react-router-dom';

export default class ResultsCard extends React.Component {
    componentDidMount(){
        var elems = document.querySelectorAll('.modal');
        var instances = M.Modal.init(elems);
    }
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
                        <p className="hide-on-small-only show-on-medium-and-up" dangerouslySetInnerHTML={{__html: shortDescription}}/>
                        <a className="waves-effect waves-light btn-small white-text modal-trigger hide-on-med-and-up show-on-small" href="#description">Description</a>
                        <div id="description" className="modal">
                            <div className="modal-content">
                            {/* <h4>Modal Header</h4> */}
                            <p dangerouslySetInnerHTML={{__html: shortDescription}}></p>
                            </div>
                            <div className="modal-footer">
                            <a href="#!" className="modal-close waves-effect waves-green btn-flat">Close</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
