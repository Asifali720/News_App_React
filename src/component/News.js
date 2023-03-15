import React, {useState, useEffect} from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



const News = (props) => {
    
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         articles: [],
    //         loading: true,
    //         page: 1,
    //         totalResults: 0
    //     }
    //     document.title = `${capitalizeFirstLetter(this.props.category)} - Live News`
    //     // document.title = 'fine'
    // }
   const capitalizeFirstLetter = (string) =>{
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const update = async() => {
        props.setProgress(0)
        // this.setState({ loading: true }) 
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.apiKey}&category=${props.category}&page=${page}&pagesize=${props.pagesize}`
        props.setProgress(30)  
        let data = await fetch(url);
        let parseData = await data.json()
        // this.setState({ articles: parseData.articles, totalResults: parseData.totalResults, })
        setArticles(parseData.articles)
        setTotalResults(parseData.totalResults)
        setLoading(false)
        props.setProgress(100)

    }
    useEffect(()=>{
        document.title = `${capitalizeFirstLetter(props.category)} - Live News`
        update()
        // eslint-disable-next-line
    }, [])
    // const componentDidMount = async() => {
    //     update()
    // }
    // handleOnPrevious = async () => {
    //     this.setState({ page: this.state.page - 1 })
    //     this.update()
    // }
    // handleOnNext = async () => {
    //     this.setState({ page: this.state.page + 1 })
    //     this.update()
    // }
    const fetchMoreData = async () => {
        // this.setState({ loading: true })
        // this.setState({ page: this.state.page + 1 }
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.apiKey}&category=${props.category}&page=${page+1}&pagesize=${props.pagesize}`
        setPage(page + 1)
        // this.loadMoreItems()
        // this.setState({ loading:  })
        let data = await fetch(url);
        let parseData = await data.json()
        setArticles(articles.concat(parseData.articles))
        setTotalResults(parseData.totalResults)
        setLoading(false)
        // this.setState({ articles: this.state.articles.concat(parseData.articles), totalResults: parseData.totalResults, })
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

        return (
            // <div className='container my-5 mb-5 p-3'>
            <>
                <div className='container' style={{ marginTop: '5rem' }}>
                    <h1>Live News - Headlines of {capitalizeFirstLetter(props.category)}</h1>
                    {loading ? <Spinner /> : null}
                </div>
                <div>
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length < totalResults}
                    loader={<Spinner/>}
                >
                    <div className="container mt-0">
                        <div className="row">
                            {articles?.map((element, index) => {
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

News.defaultType = {
    country: 'us',
    pagesize: 12,
    category: 'general'
}

News.propsType = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string
}

export default News
