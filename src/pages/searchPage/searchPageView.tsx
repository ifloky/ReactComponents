import { useState, useEffect } from 'react';
import SearchBlock from '../../features/SearchBlock/SearchBlockView';
import ResultsBlock from '../../features/ResultsBlock/ResultsBlockView';
import { getAllPlanets, getPlanet } from '../../shared/API';
import ErrorButton from '../../features/ErrorButton/ErrorButtonView';

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState(
    localStorage.getItem('searchRequest') || ''
  );
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (searchTerm) {
        handleSearch(searchTerm);
      } else {
        setLoading(true);
        const searchResults = await getAllPlanets();
        setSearchResults(searchResults.results);
        setSearchTerm('');
        setLoading(false);
      }
    };

    fetchData();
  }, [searchTerm]);

  const handleSearch = async (searchText: string) => {
    setLoading(true);

    try {
      const searchResults = await getPlanet(searchText);
      setSearchResults(searchResults.results);
      setSearchTerm(searchText);
      localStorage.setItem('searchRequest', searchText);
    } catch (error) {
      setSearchResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h1 className="main-text">What planet are you interested in?</h1>
      <SearchBlock onSearch={handleSearch} searchTerm={searchTerm} />
      <ErrorButton />
      {loading ? (
        <div className="loader">Loading...</div>
      ) : (
        <ResultsBlock searchResults={searchResults} />
      )}
    </>
  );
};

export default SearchPage;
