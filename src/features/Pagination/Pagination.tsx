import React from 'react';
import { Link } from 'react-router-dom';
import { PaginationProps } from '../../types/interfaces';

const Pagination: React.FC<PaginationProps> = ({ totalPages }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div>
      {pages.map((page) => (
        <Link key={page} to={`/search/${page}`}>
          {page}
        </Link>
      ))}
    </div>
  );
};

export default Pagination;
