import './App.css';
import Navbar from './component/Navbar';
import React, { useState } from 'react'
import News from './component/News';
import { Switch, Route } from 'react-router-dom';

import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const apiKey = process.env.REACT_APP_NEWS_API
  
 
 
    const [progress, setProgress] = useState(0)
 
    
    return (
      <div>
        <Navbar/>

        <LoadingBar
          color='#7ff5b2'
          progress={progress}
          // onLoaderFinished={() => setProgress(0)}
        />

        <Switch>
          <Route exact path='/'><News apiKey={apiKey} setProgress={setProgress} pagesize={12} country={'us'} category={'general'} /></Route>
          <Route exact key='/' path='/general'><News apiKey={apiKey} setProgress={setProgress} pagesize={12} country={'us'} category={'general'} /></Route>
          <Route exact key='/business' path='/business'><News apiKey={apiKey} setProgress={setProgress} pagesize={12} country={'us'} category={'business'} /></Route>
          <Route exact key='/entertainment' path='/entertainment'><News apiKey={apiKey} setProgress={setProgress} pagesize={12} country={'us'} category={'entertainment'} /></Route>
          <Route exact key='/health' path='/health'><News apiKey={apiKey} setProgress={setProgress} pagesize={12} country={'us'} category={'health'} /></Route>
          <Route exact key='/science' path='/science'><News apiKey={apiKey} setProgress= {setProgress} pagesize={12} country={'us'} category={'science'} /></Route>
          <Route exact key='/sports' path='/sports'><News apiKey={apiKey} setProgress={setProgress} pagesize={12} country={'us'} category={'sports'} /></Route>
          <Route exact key='/technology' path='/technology'><News apiKey={apiKey} setProgress={setProgress} pagesize={12} country={'us'} category={'technology'} /></Route>
         </Switch>
      </div>
    )
  }

  export default App

