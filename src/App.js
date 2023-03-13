// import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import React, { Component } from 'react'
import News from './component/News';
import { Switch, Route } from 'react-router-dom';
// import { useState } from 'react'
// import { useState } from 'react'
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API
  
  state = {progress: 0}
  setProgress = (progress) =>{
    this.setState({progress: progress})
  }
  render() {
    // const [progress, setProgress] = useState(0)
    // this.state = {
    //   progress: 0
    // }
    // setProgress = (progress) =>{
    //   this.setState({progress : progress})
    // }
    
    return (
      <div>
        <Navbar/>

        <LoadingBar
          color='#7ff5b2'
          progress={this.state.progress}
          // onLoaderFinished={() => setProgress(0)}
        />

        <Switch>
          <Route exact path='/'><News apiKey={this.apiKey} setProgress={this.setProgress} pagesize={12} country={'us'} category={'general'} /></Route>
          <Route exact key='/' path='/general'><News apiKey={this.apiKey} setProgress={this.setProgress} pagesize={12} country={'us'} category={'general'} /></Route>
          <Route exact key='/business' path='/business'><News apiKey={this.apiKey} setProgress={this.setProgress} pagesize={12} country={'us'} category={'business'} /></Route>
          <Route exact key='/entertainment' path='/entertainment'><News apiKey={this.apiKey} setProgress={this.setProgress} pagesize={12} country={'us'} category={'entertainment'} /></Route>
          <Route exact key='/health' path='/health'><News apiKey={this.apiKey} setProgress={this.setProgress} pagesize={12} country={'us'} category={'health'} /></Route>
          <Route exact key='/science' path='/science'><News apiKey={this.apiKey} setProgress= {this.setProgress} pagesize={12} country={'us'} category={'science'} /></Route>
          <Route exact key='/sports' path='/sports'><News apiKey={this.apiKey} setProgress={this.setProgress} pagesize={12} country={'us'} category={'sports'} /></Route>
          <Route exact key='/technology' path='/technology'><News apiKey={this.apiKey} setProgress={this.setProgress} pagesize={12} country={'us'} category={'technology'} /></Route>
         </Switch>
      </div>
    )
  }
}
