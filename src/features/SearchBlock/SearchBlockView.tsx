import React, { Component } from 'react';

class SearchBlock extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: '',
    };
  }

  handleSearchChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    const { searchTerm } = this.state;

    return (
      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={this.handleSearchChange}
          placeholder="Поиск"
        />
        <button onClick={this.props.onSearch(searchTerm)}>Поиск</button>
      </div>
    );
  }
}

export default SearchBlock;
