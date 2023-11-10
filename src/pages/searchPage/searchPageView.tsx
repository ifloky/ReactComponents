import { useState, useEffect, useCallback } from 'react';
import { fetchSearchPage, getAllPlanets } from '../../shared/API';
import { useParams, useNavigate } from 'react-router-dom';
import SearchBlock from '../../features/SearchBlock/SearchBlockView';
import ResultsBlock from '../../features/ResultsBlock/ResultsBlockView';
import Pagination from '../../features/Pagination/Pagination';

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState(
    localStorage.getItem('searchRequest') || ''
  );
  const initialSearchResults: object[] = [];
  const countPerPage = 10;
  const [countResults, setCountResults] = useState(0);
  const [searchResults, setSearchResults] = useState(initialSearchResults);
  const [loading, setLoading] = useState(false);
  const { page } = useParams();
  const [currentPage, setCurrentPage] = useState(Number(page) || 1);
  const navigate = useNavigate();

  const [blockCodeCompleted, setBlockCodeCompleted] = useState(false);

  const handleSearch = useCallback(
    async (searchText: string) => {
      setLoading(true);
      try {
        if (searchText === searchTerm) {
          const searchResults = await fetchSearchPage(searchText, currentPage);
          setCountResults(searchResults.count);
          setSearchResults(searchResults.results);
          setSearchTerm(searchText);
          localStorage.setItem('searchRequest', searchText);
        } else {
          const searchResults = await fetchSearchPage(searchText, 1);
          setCountResults(searchResults.count);
          setSearchResults(searchResults.results);
          setSearchTerm(searchText);
          localStorage.setItem('searchRequest', searchText);
          setCurrentPage(1);
          navigate(`/search/1`);
        }
        setBlockCodeCompleted(true);
      } catch (error) {
        setSearchResults([]);
      } finally {
        setLoading(false);
      }
    },
    [navigate, searchTerm, currentPage]
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
        setCountResults(searchResults.count);
        setSearchResults(searchResults.results);
        setSearchTerm('');
        setLoading(false);
        setBlockCodeCompleted(true);
      }
    };

    fetchData();
  }, [searchTerm, currentPage, handleSearch, navigate]);

  return (
    <>
      <h2 className="main-text">What planet are you interested in?</h2>
      <SearchBlock onSearch={handleSearch} searchTerm={searchTerm} />
      {loading ? (
        <div className="loader"></div>
      ) : (
        blockCodeCompleted && (
          <>
            <ResultsBlock
              searchResults={searchResults}
              currentPage={currentPage}
            />
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              countPerPage={countPerPage}
              countResults={countResults}
            />
          </>
        )
      )}
    </>
  );
};

export default SearchPage;
