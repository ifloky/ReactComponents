import React, { Component } from 'react';
import SearchBlock from './features/SearchBlock/SearchBlockView';
import ResultsBlock from './features/ResultsBlock/ResultsBlockView';

interface SearchPageState {
  searchTerm: string;
  searchResults: string[];
  error: string | null;
}

interface SearchBlockProps {
  onSearch: (searchTerm: string) => void;
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

  handleSearch = (searchTerm: string) => {

  };

  simulateError = () => {
    this.setState({ error: 'Error' });
  };

  render() {
    const { searchTerm, searchResults, error } = this.state;

    return (
      <div>
        <SearchBlock onSearch={this.handleSearch} />
        <ResultsBlock
          searchResults={searchResults}
          error={error}
          onRetry={this.handleSearch}
        />
        <button onClick={this.simulateError}>Call error</button>
      </div>
    );
  }
}

export default SearchPage;
