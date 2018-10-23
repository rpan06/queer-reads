import React from 'react';

export default class BookPageInfoModal extends React.Component {
    componentDidMount(){
        var elems = document.querySelectorAll('.modal');
        var instances = M.Modal.init(elems);
    }
    render(){
        const {ISBN, rating, format, genre, containsList} = this.props;
        return(
            <div>
                <a className="waves-effect waves-light btn modal-trigger" href="#modal1">Book Information</a>

                <div id="modal1" className="modal bottom-sheet">
                    <div className="modal-content">
                        <h4><a href={`https://www.goodreads.com/book/isbn/${ISBN}`}>Link to Goodreads</a></h4>
                        <h4>Rating</h4>
                        {rating}
                        <h4>Format</h4>
                        {format}
                        <h4>Genre</h4>
                        {genre}
                        <h4>Contains</h4>
                        {containsList}
                    </div>
                    <div className="modal-footer">
                        <a href="#!" className="modal-close waves-effect waves-green btn-flat">Close</a>
                    </div>
                </div>
            </div>
        )
    }
}
