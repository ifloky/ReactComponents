import { useState, useEffect, useCallback } from 'react';
import { fetchSearchPage, getAllPlanets } from '../../shared/API';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate
import SearchBlock from '../../features/SearchBlock/SearchBlockView';
import ResultsBlock from '../../features/ResultsBlock/ResultsBlockView';
import ErrorButton from '../../features/ErrorButton/ErrorButtonView';

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState(
    localStorage.getItem('searchRequest') || ''
  );
  const countPerPage = 10;
  const [countResults, setCountResults] = useState(10);

  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const { page } = useParams();
  const [currentPage, setCurrentPage] = useState(Number(page) | 1);
  const navigate = useNavigate();

  const handleSearch = useCallback(
    async (searchText: string) => {
      setLoading(true);
      try {
        if (searchText === searchTerm) {
          const searchResults = await fetchSearchPage(searchText, Number(page));
          console.log(searchResults);
          setCountResults(searchResults.count);
          setSearchResults(searchResults.results);
          setSearchTerm(searchText);
          localStorage.setItem('searchRequest', searchText);
        } else {
          const searchResults = await fetchSearchPage(searchText, 1);
          console.log(searchResults);
          setCountResults(searchResults.count);
          setSearchResults(searchResults.results);
          setSearchTerm(searchText);
          localStorage.setItem('searchRequest', searchText);
          navigate(`/search/1`);
        }
      } catch (error) {
        setSearchResults([]);
      } finally {
        setLoading(false);
      }
    },
    [currentPage, navigate]
  );

  useEffect(() => {
    if (page) {
      setCurrentPage(parseInt(page, 10));
    }
  }, [page]);

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
  }, [searchTerm, currentPage, handleSearch, navigate]);

  return (
    <>
      <h1 className="main-text">What planet are you interested in?</h1>
      <SearchBlock onSearch={handleSearch} searchTerm={searchTerm} />
      <ErrorButton />
      {loading ? (
        <div className="loader">Loading...</div>
      ) : (
        <ResultsBlock
          searchResults={searchResults}
          itemsPerPage={10}
          countResults={countResults}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          countPerPage={countPerPage}
        />
      )}
    </>
  );
};

export default SearchPage;
