import Wrapper from "../assets/wrappers/PageBtnContainer";
import { useLocation, useNavigate } from "react-router-dom";
import { useAllResourcesContext } from "../pages/AllResources";

const PageBtnContainer = () => {
  const { data } = useAllResourcesContext();
  const { numPages, currentPage: rawCurrentPage } = data;
  const { search, pathname } = useLocation();
  const navigate = useNavigate();

  // Ensure currentPage is a valid number
  const currentPage = Number(rawCurrentPage) || 1;

  // Add safety checks for undefined values
  if (!numPages || numPages <= 1) {
    return null;
  }

  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set('page', pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  const addPageButton = ({ pageNumber, activeClass }) => {
    return (
      <button
        className={`btn page-btn ${activeClass && 'active'}`}
        key={pageNumber}
        onClick={() => handlePageChange(pageNumber)}
      >
        {pageNumber}
      </button>
    );
  };

  const renderPageButtons = () => {
    const pageButtons = [];

    // If only one page, just show it
    if (numPages === 1) {
      return [addPageButton({ pageNumber: 1, activeClass: true })];
    }

    // Always add first page button
    if (numPages > 0) {
    pageButtons.push(
      addPageButton({ pageNumber: 1, activeClass: currentPage === 1 })
    );
    }

    // Add dots before if needed
    if (currentPage > 3) {
      pageButtons.push(
        <span className='page-btn dots' key='dots-1'>
          ...
        </span>
      );
    }

    // Add one button before current page if possible
    if (currentPage > 2 && currentPage <= numPages) {
      pageButtons.push(
        addPageButton({
          pageNumber: currentPage - 1,
          activeClass: false,
        })
      );
    }

    // Add current page button if not first or last
    if (currentPage > 1 && currentPage < numPages && currentPage <= numPages) {
      pageButtons.push(
        addPageButton({
          pageNumber: currentPage,
          activeClass: true,
        })
      );
    }

    // Add one button after current page if possible
    if (currentPage < numPages - 1 && currentPage >= 1) {
      pageButtons.push(
        addPageButton({
          pageNumber: currentPage + 1,
          activeClass: false,
        })
      );
    }

    // Add dots after if needed
    if (currentPage < numPages - 2) {
      pageButtons.push(
        <span className='page-btn dots' key='dots+1'>
          ...
        </span>
      );
    }

    // Always add last page button (if different from first)
    if (numPages > 1) {
    pageButtons.push(
      addPageButton({
          pageNumber: numPages,
          activeClass: currentPage === numPages,
      })
    );
    }

    return pageButtons;
  };

  return (
    <Wrapper>
      <button
        className='btn prev-btn'
        onClick={() => {
          let prevPage = currentPage - 1;
          if (prevPage < 1) prevPage = numPages;
          handlePageChange(prevPage);
        }}
        disabled={numPages <= 1}
      >
        Prev
      </button>
      <div className='btn-container'>{renderPageButtons()}</div>
      <button
        className='btn next-btn'
        onClick={() => {
          let nextPage = currentPage + 1;
          if (nextPage > numPages) nextPage = 1;
          handlePageChange(nextPage);
        }}
        disabled={numPages <= 1}
      >
        Next
      </button>
    </Wrapper>
  );
};

export default PageBtnContainer;
