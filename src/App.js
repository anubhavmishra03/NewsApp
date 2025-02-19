import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

document.body.style.backgroundColor = '#042743';
export default class App extends Component {
  apiKey = process.env.REACT_APP__NEWS_API
  state={
    progress: 0
  }
  setProgress = (progress) => {
    this.setState({progress: progress})
  }
  render() {
    return (
      <div>
        <Router>
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
            height={3}
          />
          <Navbar />
          <Routes>
            <Route exact path = "/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="in" country="in" category="general" /> } />
            <Route exact path = "/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" country="in" category="business" />} />
            <Route exact path = "/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" country="in" category="entertainment" />} />
            <Route exact path = "/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" country="in" category="general" />} />
            <Route exact path = "/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" country="in" category="health" />} />
            <Route exact path = "/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" country="in" category="science" />} />
            <Route exact path = "/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" country="in" category="sports" />} />
            <Route exact path = "/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" country="in" category="technology" />} />
            <Route exact path = "/us" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="us" country="us" category="general" /> } />
            <Route exact path = "/ch" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="cn" country="cn" category="general" /> } />
            <Route exact path = "/fr" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="fr" country="fr" category="general" /> } />
            <Route exact path = "/ge" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="ge" country="de" category="general" /> } />
          </Routes>
        </Router>
      </div>
    )
  }
}

