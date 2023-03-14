import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



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
            loading: true,
            page: 1,
            totalResults: 0
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - Live News`
        // document.title = 'fine'
    }
    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    async update() {
        this.props.setProgress(0)
        // this.setState({ loading: true }) 
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${this.props.apiKey}&category=${this.props.category}&page=${this.state.page}&pagesize=${this.props.pagesize}`
        this.props.setProgress(30)  
        let data = await fetch(url);
        let parseData = await data.json()
        this.setState({ articles: parseData.articles, totalResults: parseData.totalResults, })
        this.props.setProgress(100)

    }
    async componentDidMount() {
        this.update()
    }
    // handleOnPrevious = async () => {
    //     this.setState({ page: this.state.page - 1 })
    //     this.update()
    // }
    // handleOnNext = async () => {
    //     this.setState({ page: this.state.page + 1 })
    //     this.update()
    // }
    fetchMoreData = async () => {
        // this.setState({ loading: true })
        this.setState({ page: this.state.page + 1 })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${this.props.apiKey}&category=${this.props.category}&page=${this.state.page}&pagesize=${this.props.pagesize}`
        // this.loadMoreItems()
        // this.setState({ loading:  })
        let data = await fetch(url);
        let parseData = await data.json()
        this.setState({ articles: this.state.articles.concat(parseData.articles), totalResults: parseData.totalResults, })
        // if (this.state.loading || (this.state.items > this.state.hasMore)) {
        //     // Do not load if there's no more items
        //     return;
        //   }    

    }

    // loadMoreItems = () => {
    //     // hasMore = data.items.length (you may want to rename this more appropriately)
    //     if (this.state.loading || (this.state.items > this.state.hasMore)) {
    //       // Do not load if there's no more items
    //       return;
    //     }
    // }  

    render() {
        return (
            // <div className='container my-5 mb-5 p-3'>
            <>
                <div className='container' style={{ marginTop: '5rem' }}>
                    <h1>Live News - Headlines of {this.capitalizeFirstLetter(this.props.category)}</h1>
                    {this.loading ? <Spinner /> : null}
                </div>
                <div>
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length < this.state.totalResults}
                    loader={<Spinner/>}
                >
                    <div className="container mt-0">
                        <div className="row">
                            {this.state.articles?.map((element, index) => {
                                return <div className="col-md-4 my-2" key={index}>
                                    <NewsItems title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                </div>
                            })}

                        </div>
                    </div>

                </InfiniteScroll>
                </div>

            </>

            /* <div className="container d-flex justify-content-between">
                <button disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.handleOnPrevious}>&larr; previous</button>
                <button disabled={this.state.page > Math.ceil(this.state.totalResults / this.props.pagesize)} className="btn btn-dark" onClick={this.handleOnNext}>next &rarr;</button>
            </div> */
            // </div>
        )
    }
}

export default News
