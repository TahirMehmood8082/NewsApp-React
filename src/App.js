import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import{ BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { PageNotFound } from './components/PageNotFound';
export default class App extends Component {
  pageSize = 15;
  render() {
    return (
      <div>
        <Router>
          <NavBar/>
          <Routes>
              <Route exact path='/' element={<News key="general" pageSize={this.pageSize} country="us" category="general"/>} />
              <Route exact path='/businness' element={<News key="businness" pageSize={this.pageSize} country="us" category="businness"/>} />
              <Route exact path='/entertainment' element={<News key="entertainment" pageSize={this.pageSize} country="us" category="entertainment"/>} />
              <Route exact path='/' element={<News key="general" pageSize={this.pageSize} country="us" category="general"/>} />
              <Route exact path='/health' element={<News key="health" pageSize={this.pageSize} country="us" category="health"/>} />
              <Route exact path='/science' element={<News key="science" pageSize={this.pageSize} country="us" category="science"/>} />
              <Route exact path='/sports' element={<News key="sports" pageSize={this.pageSize} country="us" category="sports"/>} />
              <Route exact path='/technology' element={<News key="technology" pageSize={this.pageSize} country="us" category="technology"/>} />
              <Route path='*' element={<PageNotFound/>} />


          </Routes>
        </Router>
      </div>
    )
  }
}

