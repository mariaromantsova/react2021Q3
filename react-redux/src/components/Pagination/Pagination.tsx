import React, { MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import * as actions from '../../redux/actions';

type Props = {
  pagesLimit: number;
};

const Pagination: React.FunctionComponent<Props> = ({ pagesLimit }) => {
  const dispatch = useDispatch();
  const totalPages = useSelector((state: RootState) => state.totalPages);
  const currentPage = useSelector((state: RootState) => state.currentPage);

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
    dispatch(actions.setCurrentPage(page));
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
              dispatch(actions.setCurrentPage(currentPage - 1));
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
              dispatch(actions.setCurrentPage(currentPage + 1));
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
