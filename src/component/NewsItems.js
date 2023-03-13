import React, { Component } from 'react'

export class NewsItems extends Component {

    render() {
        let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
        return (
            <div>
                <div className="card" style={{width: "18rem"}}>
                <span className="position-absolute badge rounded-pill bg-dark"> {source} </span>
    {/* <span class="visually-hidden">unread messages</span> */}
                    <img src={!imageUrl?'https://source.unsplash.com/random':imageUrl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <p className="card-text"><small className="text-muted">By {!author?'unknown':author} on {new Date(date).toGMTString()}</small></p>
                            <a href={newsUrl} className="btn btn-sm btn-dark">Read more</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItems
