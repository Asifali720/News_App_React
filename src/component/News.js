import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner'
import PropTypes from 'prop-types'


export class News extends Component {
    static defaultType = {
        country: 'us',
        pagesize: 12,
        category: 'general'
    }
    static propsType = {
        country: PropTypes.string,
        pagesize: PropTypes.number,
        category: PropTypes.string
    }
    constructor(props) {
        super(props)
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - Live News`
        // document.title = 'fine'
    }
     capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    async update(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=a09a37db392349c4aa4b3f7109d3c744&category=${this.props.category}&page=${this.state.page}&pagesize=${this.props.pagesize}`
        this.setState({ loading: true })
        let data = await fetch(url);
        let parseData = await data.json()
        this.setState({ articles: parseData.articles, totalResults: parseData.totalResults, loading: false })
    
    }
    async componentDidMount() {
        this.update()
    }
    handleOnPrevious = async () => {
        this.setState({page: this.state.page -1})
        this.update()
    }
    handleOnNext = async () => {
        this.setState({page: this.state.page + 1})
        this.update()
    }
    render() {
        return (
            <div className='container my-5 mb-5 p-3'>
                <h1>Live News - Headlines of {this.capitalizeFirstLetter(this.props.category)}</h1>
                {this.state.loading === true ? <Spinner /> : this.state.loading === false}
                <div className="row">

                    {!this.state.loading && this.state.articles?.map((element) => {
                        return <div className="col-md-4 my-2" key={element.url}>
                            <NewsItems title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                        </div>
                    })}

                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.handleOnPrevious}>&larr; previous</button>
                    <button disabled={this.state.page > Math.ceil(this.state.totalResults /this.props.pagesize)} className="btn btn-dark" onClick={this.handleOnNext}>next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
