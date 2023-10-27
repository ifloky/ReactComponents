import React, { Component } from 'react';
import SearchBlock from './features/SearchBlock/SearchBlockView';
import ResultsBlock from './features/ResultsBlock/ResultsBlockView';
import { getPlanet } from "./shared/API";

interface SearchPageState {
  searchTerm: string;
  searchResults: [];
  error: string | null;
}
class SearchPage extends Component<{}, SearchPageState> {
  constructor(props: {}) {
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
      console.log(this.state.searchResults)
    } catch (error) {
      this.setState({ searchResults: [], error: 'Error' });
    }
  };

  render() {
    return (
      <div>
        <SearchBlock onSearch={this.handleSearch} />
        <ResultsBlock
          searchResults={this.state.searchResults}
        />
      </div>
    );
  }
}

export default SearchPage;
