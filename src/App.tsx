import React, { Component } from 'react';
import SearchBlock from './features/SearchBlock/SearchBlockView';
import ResultsBlock from './features/ResultsBlock/ResultsBlockView';
import { getAllPlanets, getPlanet } from './shared/API';
import ErrorButton from './features/ErrorButton/ErrorButtonView';

interface SearchPageState {
  searchTerm: string;
  searchResults: [];
  error: string | null;
  loading: boolean;
}

class SearchPage extends Component<object, SearchPageState> {
  constructor(props: object) {
    super(props);
    this.state = {
      searchTerm: localStorage.getItem('searchRequest') || '',
      searchResults: [],
      error: null,
      loading: false,
    };
  }

  async componentDidMount() {
    if (this.state.searchTerm) {
      this.handleSearch(this.state.searchTerm);
      this.setState({
        searchResults: [],
        error: null,
        searchTerm: this.state.searchTerm,
        loading: true,
      });
    } else {
      const searchResults = await getAllPlanets();
      this.setState({
        searchResults: searchResults.results,
        error: null,
        searchTerm: '',
        loading: false,
      });
    }
  }

  handleSearch = async (searchText: string) => {
    this.setState({ loading: true });

    try {
      const searchResults = await getPlanet(searchText);
      this.setState({
        searchResults: searchResults.results,
        error: null,
        searchTerm: searchText,
        loading: false,
      });

      localStorage.setItem('searchRequest', searchText);
    } catch (error) {
      this.setState({
        searchResults: [],
        error: 'Error',
        loading: false,
      });
    }
  };

  render() {
    return (
      <>
        <h1 className="main-text">What planet are you interested in?</h1>
        <SearchBlock
          onSearch={this.handleSearch}
          searchTerm={this.state.searchTerm}
        />
        <ErrorButton />
        {this.state.loading ? (
          <div className="loader">Loading...</div>
        ) : (
          <ResultsBlock searchResults={this.state.searchResults} />
        )}
      </>
    );
  }
}

export default SearchPage;
