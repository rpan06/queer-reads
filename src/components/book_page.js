import React from 'react';

export default class BookPage extends React.Component {
    state = {}

    componentDidMount(){
        this.getBookDetails();
    }

    getBookDetails(){
        const {ISBN} = this.props.match.params;
        $.getJSON('http://www.whateverorigin.org/get?url=' + encodeURIComponent(`https://www.goodreads.com/book/isbn/${ISBN}`) + '&callback=?', function(data){
            this.scrapeWebData()
        });
    }

    scrapeWebData(){
        const imageURL = data.match(/id="coverImage"[\w\W]*(http.*\.jpg)[\w\W]*class="bookCoverActions">/)[1]
        const bookInfo = data.match(/id="bookTitle[\w\W]*itemprop="name">\n(.*)\n[\w\W]*>\n(.*)\n<\/a><\/h2>[\w\W]*href="(.*)"><span itemprop="name">(.*)<\/span><\/a>[\w\W]*class="authorName__container/);
        const title = bookInfo[1].trim();
        const series = bookInfo[2].trim();
        const authorURL = bookInfo[3];
        const author = bookInfo[4];
        const bookDescription = data.match(/id="description"[\w\W]*freeTextContainer[\d]*">(.*)<\/span>[\w\W]*style="display:none">(.*)<\/span>[\w\W]*buyButtonContainer/);
        const shortDescription = bookDescription[1];
        const longDescription = bookDescription[2];
        this.setState({
            imageURL: imageURL,
            title: title,
            series: series,
            author: author,
            longDescription: longDescription
        })
    }

    render(){
        const {imageURL, title, series, author, longDescription} = this.state;
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
                        <p>Gay</p>
                        <p>Lesbian</p>
                        <p>Bisexual</p>
                        <p>Multiple Characters</p>
                    </div>

                    <div className="col s9">
                        <h4>{title}</h4>
                        <h4>{series}</h4>
                        <h4>by {author}</h4>
                        <br/>
                        <p>{longDescription}</p>
                    </div>
                </div>
            </div>
        )
    }
}
