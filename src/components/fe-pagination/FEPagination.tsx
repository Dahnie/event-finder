/* eslint-disable @typescript-eslint/no-explicit-any */
import "./Pagination.css";
import arrowLeftIcon from "../../assets/images/svg/arrow-left.svg";
import arrowRightIcon from "../../assets/images/svg/arrow-right.svg";

interface IProps {
  rowsPerPage: number;
  totalPosts: any;
  paginate: (pageNumber: number) => void;
  currentPage: number;
  className?: string;
}

function FEPagination({
  rowsPerPage,
  totalPosts,
  paginate,
  currentPage,
  className = "",
}: IProps) {
  const pageNumbers = [];

  // Get an array of page numbers
  for (let i = 1; i <= Math.ceil(totalPosts / rowsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={`pagination-container ${className}`}>
      <nav>
        <div className="prev-button-wrapper">
          <button
            onClick={() => {
              if (currentPage > 1) {
                paginate(currentPage - 1);
              }
            }}
          >
            <img src={arrowLeftIcon} alt="arrow-left-icon" />
          </button>
        </div>
        <ul className="pagination__">
          {pageNumbers.map((number) => (
            <li
              className={`pagination--page-item ${
                number === currentPage
                  ? "active"
                  : number === currentPage - 1
                  ? "active-sibling"
                  : ""
              }`}
              key={number}
            >
              <button onClick={() => paginate(number)} className="page-link">
                {number}
              </button>
            </li>
          ))}
        </ul>
        <div className="next-button-wrapper">
          <button
            onClick={() => {
              if (currentPage * rowsPerPage < totalPosts) {
                paginate(currentPage + 1);
              }
            }}
          >
            <img src={arrowRightIcon} alt="arrow-right-icon" />
          </button>
        </div>
      </nav>
    </div>
  );
}

export default FEPagination;
