import React from 'react';
import { Link } from 'react-router-dom';
import { PaginationProps } from '../../types/interfaces';

const Pagination: React.FC<PaginationProps> = ({
  countResults,
  countPerPage,
  setCurrentPage,
}) => {
  const totalPages = Math.ceil(countResults / countPerPage);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="pagination">
      {pages.map((page) => (
        <Link
          key={page}
          to={`/search/${page}`}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </Link>
      ))}
    </div>
  );
};

export default Pagination;
