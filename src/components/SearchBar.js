/* eslint-disable react/prop-types */
import React, { Component } from 'react';

export default class SearchBar extends Component {
  state = {
    term: '',
  };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    const { term } = this.state;
    const { onFormSubmit } = this.props;
    event.preventDefault();

    // passing the term from the state to the props, so the father component
    // can have access to it
    onFormSubmit(term);
  };

  render() {
    const { term } = this.state;
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label htmlFor="videoSearch">
              Video Search
              <input id="videoSearch" value={term} onChange={this.onInputChange} type="text" />
            </label>
          </div>
        </form>
      </div>
    );
  }
}
