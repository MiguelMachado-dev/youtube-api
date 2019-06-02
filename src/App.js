import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import youtube from './apis/youtube';

export default class App extends Component {
  state = {
    videos: [],
  };

  // getting the term from SearchBar component and using axios to
  // get the results
  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });

    this.setState({ videos: response.data.items });
  };

  render() {
    const { videos } = this.state;
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />I have {videos.length} videos.
      </div>
    );
  }
}
