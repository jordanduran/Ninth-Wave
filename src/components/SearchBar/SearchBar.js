import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      suggestions: []
    };
  }

  render() {
    return (
      <div className='SearchBar'>
        <form
          onSubmit={e => {
            this.handleSearchSubmit(e);
          }}
        >
          <input
            type='text'
            value={this.state.term}
            onChange={e => {
              this.handleOnChange(e.target.value);
            }}
          />
          <button type='submit'>Search</button>
        </form>
      </div>
    );
  }
}
