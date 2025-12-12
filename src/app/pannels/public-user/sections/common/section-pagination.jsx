function SectionPagination({
  totalItems = 0,
  itemsPerPage = 10,
  currentPage = 1,
  onPageChange,
}) {
  // Calculate total pages
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Don't render pagination if there's only 1 page or no items
  if (totalPages <= 1) {
    return null;
  }

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      // Show all pages if total pages is less than or equal to max visible
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Show pages with ellipsis logic
      if (currentPage <= 3) {
        // Show first 3 pages, ellipsis, and last page
        pages.push(1, 2, 3, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        // Show first page, ellipsis, and last 3 pages
        pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
      } else {
        // Show first page, ellipsis, current page with neighbors, ellipsis, last page
        pages.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
    }

    return pages;
  };

  const handlePageClick = (page) => {
    if (
      page !== currentPage &&
      page !== "..." &&
      page >= 1 &&
      page <= totalPages
    ) {
      onPageChange && onPageChange(page);
    }
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      onPageChange && onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      onPageChange && onPageChange(currentPage + 1);
    }
  };

  const pageNumbers = getPageNumbers();

  return (
    <>
      <div className="pagination-outer">
        <div className="pagination-style1">
          <ul className="clearfix">
            {/* Previous Button */}
            <li className={`prev ${currentPage === 1 ? "disabled" : ""}`}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handlePrevClick();
                }}
                style={{
                  opacity: currentPage === 1 ? 0.5 : 1,
                  cursor: currentPage === 1 ? "not-allowed" : "pointer",
                }}
              >
                <span>
                  {" "}
                  <i className="fa fa-angle-left" />{" "}
                </span>
              </a>
            </li>

            {/* Page Numbers */}
            {pageNumbers.map((page, index) => (
              <li key={index} className={page === currentPage ? "active" : ""}>
                {page === "..." ? (
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    <i className="fa fa-ellipsis-h" />
                  </a>
                ) : (
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handlePageClick(page);
                    }}
                  >
                    {page}
                  </a>
                )}
              </li>
            ))}

            {/* Next Button */}
            <li
              className={`next ${currentPage === totalPages ? "disabled" : ""}`}
            >
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleNextClick();
                }}
                style={{
                  opacity: currentPage === totalPages ? 0.5 : 1,
                  cursor:
                    currentPage === totalPages ? "not-allowed" : "pointer",
                }}
              >
                <span>
                  {" "}
                  <i className="fa fa-angle-right" />{" "}
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default SectionPagination;
