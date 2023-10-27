import React, { Component } from 'react';
import SearchBlock from './features/SearchBlock/SearchBlockView';
import ResultsBlock from './features/ResultsBlock/ResultsBlockView';
import { getPlanet } from './shared/API';

interface SearchPageState {
  searchTerm: string;
  searchResults: [];
  error: string | null;
}

class SearchPage extends Component<object, SearchPageState> {
  constructor(props: object) {
    super(props);
    this.state = {
      searchTerm: '',
      searchResults: [],
      error: null,
    };
  }

  handleSearch = async (searchText: string) => {
    try {
      const searchResults = await getPlanet(searchText);
      this.setState({ searchResults: searchResults.results, error: null });
    } catch (error) {
      this.setState({ searchResults: [], error: 'Error' });
    }
  };

  render() {
    return (
      <>
        <h1 className="main-text">What planet are you interested in?</h1>
        <SearchBlock onSearch={this.handleSearch} />
        <ResultsBlock searchResults={this.state.searchResults} />
      </>
    );
  }
}

export default SearchPage;
