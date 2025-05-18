const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;

    let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    let end = start + maxVisible - 1;

    if (end > totalPages) {
      end = totalPages;
      start = Math.max(1, end - maxVisible + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  const buttonClass = `flex w-10 h-10 min-w-[2.5rem] max-w-[2.5rem] 
    items-center justify-center overflow-hidden rounded-lg 
    font-mono text-center transition-colors duration-150`;

  return (
    <div className="flex w-fit items-center justify-center gap-2 rounded-lg bg-purple-50 p-4 mx-auto">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`${buttonClass} text-white ${
          currentPage === 1
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-main-clr-1 hover:bg-main-clr-1/70"
        }`}
      >
        &lt;
      </button>

      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`${buttonClass} ${
            page === currentPage
              ? "bg-main-clr-1 text-white"
              : "text-main-clr-1 hover:bg-purple-200"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`${buttonClass} text-white ${
          currentPage === totalPages
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-main-clr-1 hover:bg-main-clr-1/70"
        }`}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
