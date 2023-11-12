import React from 'react';
import { Link } from 'react-router-dom';
import { PaginationProps } from '../../types/interfaces';

const Pagination: React.FC<PaginationProps> = ({
  setCurrentPage,
  currentPage,
  countResults,
  countPerPage,
}) => {
  const totalPages = Math.ceil(countResults / countPerPage);

  return (
    <div className="pagination">
      <>
        <Link
          to={currentPage > 1 ? `/${currentPage - 1}` : `/${currentPage}`}
          onClick={() => setCurrentPage(currentPage)}
        >
          Prev page
        </Link>
        <p>{currentPage}</p>
        <Link
          to={
            currentPage < totalPages ? `/${currentPage + 1}` : `/${currentPage}`
          }
          onClick={() => setCurrentPage(currentPage)}
        >
          Next page
        </Link>
      </>
    </div>
  );
};

export default Pagination;
