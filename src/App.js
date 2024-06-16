import "./App.css";
import LoadingBar from "react-top-loading-bar";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import About from "./components/About";
import {
 BrowserRouter as Router,
 Routes,
 Route,
} from "react-router-dom";
export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API
  state = {
    progress : 0
  }
  setProgress = (progress) => {
    this.setState({progress:progress});
  }
 render() {
  return (
   <div>
   <Router>
    <Navbar />
    <LoadingBar
        color='#97BC62'
        progress={this.state.progress}
        height = {2}
      />
    <Routes>
     <Route  path="/"  element={<News key="general" setProgress = {this.setProgress} apiKey={this.apiKey}     headline="DailyGlimpse - Sizzling Hot Stories🔥" pageSize={5} country={'in'} category={'general'} />} />
     <Route  path="/business"  element={<News setProgress = {this.setProgress} apiKey={this.apiKey}     headline="Money Moves💲" pageSize={5} country={'in'} key="business" category={'business'} />} />
     <Route  path="/sports"element={<News key="sports"  setProgress = {this.setProgress} apiKey={this.apiKey}     headline="Game Changers🥎" pageSize={5} country={'in'} category={'sports'} />} />
     <Route  path="/entertainment"element={<News  key="entertainment"  setProgress = {this.setProgress} apiKey={this.apiKey}     headline="Star Scoop🎬" pageSize={5} country={'in'} category={'entertainment'} />} />
     <Route  path="/health"  element={<News key="health" setProgress = {this.setProgress} apiKey={this.apiKey}     headline="Wellness Watch🩺" pageSize={5} country={'in'} category={'health'} />} />
     <Route  path="/science" element={<News key="science" setProgress = {this.setProgress} apiKey={this.apiKey}     headline="Science Sensations🧬" pageSize={5} country={'in'} category={'science'} />} />
     <Route  path="/technology" element={<News key="technology"  setProgress = {this.setProgress} apiKey={this.apiKey}     headline="Tech Trends🚀" pageSize={5} country={'in'} category={'technology'} />} />
     <Route path="/about"  element={<About key="about" category={'about'}/>} />
    </Routes>
   </Router>
  </div>
  );
 }
}
