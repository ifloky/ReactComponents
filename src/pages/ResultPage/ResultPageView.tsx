import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ResultsBlock from '../../features/ResultsBlock/ResultsBlockView';
import Pagination from '../../features/Pagination/Pagination';
import { fetchResultsPage } from '../../shared/API';

const ResultsPage = () => {
  const { page } = useParams();

  const [searchResults, setSearchResults] = useState([]);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      const results = await fetchResultsPage(page);
      setSearchResults(results);
    };

    fetchData();
  }, [page]);

  return (
    <div>
      <ResultsBlock searchResults={searchResults} itemsPerPage={itemsPerPage} />
      <div className="pagination">
        {<Pagination totalPages={10} currentPage={0} />}
      </div>
    </div>
  );
};

export default ResultsPage;
