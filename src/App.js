// import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import React, { Component } from 'react'
import News from './component/News';
import { Switch, Route } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div>
          <Navbar />
          <Switch>
          <Route exact key='/' path='/'><News pagesize={12} country={'us'} category={'general'} /></Route>
          <Route exact key='/' path='/general'><News pagesize={12} country={'us'} category={'general'} /></Route>
            <Route exact key='/business' path='/business'><News pagesize={12} country={'us'} category={'business'} /></Route>
            <Route exact key='/entertainment' path='/entertainment'><News pagesize={12} country={'us'} category={'entertainment'} /></Route>
            <Route exact key='/health' path='/health'><News pagesize={12} country={'us'} category={'health'} /></Route>
            <Route exact key='/science' path='/science'><News pagesize={12} country={'us'} category={'science'} /></Route>
            <Route exact key='/sports' path='/sports'><News pagesize={12} country={'us'} category={'sports'} /></Route>
            <Route exact key='/technology' path='/technology'><News pagesize={12} country={'us'} category={'technology'} /></Route>
          </Switch>
      </div>
    )
  }
}
