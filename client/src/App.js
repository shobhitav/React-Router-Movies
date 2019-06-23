import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }
 
  addToSavedList = movie => {
    const savedList = this.state.savedList;
    // only push the movie to saved list if the title doesn't exist already
    if (savedList.findIndex(movieItem => movieItem.title === movie.title) === -1) savedList.push(movie) ;
    this.setState({ savedList });
  };

  render() {
    return (
      <Router>
      <div>
        <SavedList list={this.state.savedList} />
        <div>
          <Route path="/" component={MovieList} exact />
          <Route path="/movies/:id" render={
            (props) => <Movie {...props} addToSavedList={this.addToSavedList} />
          } 
          />
        </div>
      </div>
      </Router>
    );
  }
}
