const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const getPageNumbers = () => {
    const pages = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);

      if (currentPage > 3) pages.push("...");

      const middlePages = [
        currentPage - 1,
        currentPage,
        currentPage + 1,
      ].filter((page) => page > 1 && page < totalPages);

      pages.push(...middlePages);

      if (currentPage < totalPages - 2) pages.push("...");
      pages.push(totalPages);
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  const buttonClass = `flex w-8 h-8 md:w-12 md:h-12 text-xl font-medium
    items-center justify-center overflow-hidden rounded-xl text-center duration-150`;

  return (
    <div className="flex w-fit items-center justify-center gap-1 rounded-lg bg-main-clr-1/10 mx-auto">
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

      {pageNumbers.map((page, index) => (
        <button
          key={index}
          disabled={page === "..."}
          onClick={() => typeof page === "number" && onPageChange(page)}
          className={`${buttonClass} ${
            page === currentPage
              ? "bg-main-clr-1 text-white"
              : page === "..."
              ? "cursor-default text-main-clr-1"
              : "text-main-clr-1 hover:bg-main-clr-1/30"
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
