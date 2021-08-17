import React, { MouseEvent } from 'react';

type Props = {
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  pagesLimit: number;
  totalPages: number;
  currentPage: number;
};

const Pagination: React.FunctionComponent<Props> = ({
  setCurrentPage,
  currentPage,
  totalPages,
  pagesLimit,
}) => {
  const getPagesGroup = () => {
    const start = Math.floor((currentPage - 1) / pagesLimit) * pagesLimit;
    const pages = [...Array(pagesLimit).keys()].map(page => start + page + 1);

    if (pages.includes(totalPages)) {
      pages.splice(pages.indexOf(totalPages) + 1, pages.length);
    }

    return pages;
  };

  const handleClick = (e: MouseEvent, page: number) => {
    e.preventDefault();
    setCurrentPage(page);
  };

  return (
    <nav className="mt-5">
      <ul className="pagination">
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <button
            type="button"
            className="page-link"
            onClick={(e: MouseEvent) => {
              e.preventDefault();
              setCurrentPage(page => page - 1);
            }}
          >
            Previous
          </button>
        </li>
        {getPagesGroup().map(page => (
          <li
            className={`page-item ${currentPage === page ? 'active' : null}`}
            key={page}
          >
            <button
              type="button"
              className="page-link"
              onClick={e => handleClick(e, page)}
            >
              {page}
            </button>
          </li>
        ))}
        <li
          className={`page-item ${
            currentPage === totalPages ? 'disabled' : ''
          }`}
        >
          <button
            type="button"
            className="page-link"
            onClick={() => {
              setCurrentPage(page => page + 1);
            }}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
