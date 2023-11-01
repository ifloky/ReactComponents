import React, { Component } from 'react';

interface SearchBlockProps {
  onSearch: (searchTerm: string) => void;
  searchTerm: string;
}

interface SearchBlockState {
  searchTerm: string;
}

class SearchBlock extends Component<SearchBlockProps, SearchBlockState> {
  constructor(props: SearchBlockProps) {
    super(props);
    this.state = {
      searchTerm: props.searchTerm,
    };
  }

  handleSearchChange = (event: { target: { value: string } }) => {
    this.setState({ searchTerm: event.target.value });
  };

  handleSearch = () => {
    this.props.onSearch(this.state.searchTerm.trim());
  };

  render() {
    const { searchTerm } = this.state;
    console.log(searchTerm);
    return (
      <div className="search-block">
        <input
          type="text"
          value={searchTerm}
          onChange={this.handleSearchChange}
          placeholder="Search"
        />
        <button onClick={this.handleSearch}>Search</button>
      </div>
    );
  }
}

export default SearchBlock;
