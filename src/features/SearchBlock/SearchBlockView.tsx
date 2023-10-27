import React, { Component } from 'react';

interface SearchBlockProps {
  onSearch: (searchTerm: string) => void;
}

interface SearchBlockState {
  searchTerm: string;
}

class SearchBlock extends Component<SearchBlockProps, SearchBlockState> {
  constructor(props: SearchBlockProps) {
    super(props);
    this.state = {
      searchTerm: '',
    };
  }


  handleSearchChange = (event: { target: { value: any; }; }) => {
    this.setState({ searchTerm: event.target.value });
  };

  handleSearch = () => {
    this.props.onSearch(this.state.searchTerm);
  };

  render() {
    const { searchTerm } = this.state;
    return (
      <div>
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
