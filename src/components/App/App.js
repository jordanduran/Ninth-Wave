import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
  }

  render() {
    return (
      <div className='App'>
        <Route exact path='/' component={SearchBar} />
      </div>
    );
  }
}

export default App;
