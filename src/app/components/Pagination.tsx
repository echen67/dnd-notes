import { useMemo } from "react";
import { useRouter, usePathname } from "next/navigation";

// TODO: update all this - can only use prev/next buttons now because graphql doesn't give totalCount

const paginationContainerStyle = {
  display: "flex",
  justifyContent: "center",
  marginTop: 16,
};
const pageButtonStyle = {
  margin: 2,
  padding: 4,
  backgroundColor: "#eee",
  cursor: "pointer",
  borderRadius: 4,
  minWidth: 32,
};

export const Pagination = ({
  totalPages,
  currentPage,
  setPage,
}: {
  totalPages: number;
  currentPage: number;
  setPage: any;
}) => {
  const router = useRouter();
  const pathname = usePathname();

  // BUTTON CLICK HANDLERS
  const handleFirstClick = () => {
    if (currentPage === 1) return;
    setPage(0);
    router.push(pathname + `?page=1`);
  };

  const handleLastClick = () => {
    if (currentPage === totalPages) return;
    setPage(totalPages - 1);
    router.push(pathname + `?page=${totalPages}`);
  };

  const handlePrevClick = () => {
    if (currentPage === 1) return;

    const newPage = Math.max(currentPage - 1, 1);
    router.push(pathname + `?page=${newPage}`);
    setPage((prevPage: number) => Math.max(prevPage - 1, 0));
  };

  const handleNextClick = () => {
    if (currentPage === totalPages) return;

    const newPage = Math.min(currentPage + 1, totalPages);
    router.push(pathname + `?page=${newPage}`);
    setPage((prevPage: number) => Math.min(prevPage + 1, totalPages - 1));
  };

  const handlePageClick = (page: number) => {
    router.push(pathname + `?page=${page + 1}`);
    setPage(page);
  };

  // if there are more than 5 pages, instead of displaying all pages, only display first page ... the current page and
  // the pages next to it, and the last page
  // TODO: consider if current page is first or last
  const pagesArray = useMemo(() => {
    if (totalPages > 5) {
      const arr = new Array(3);
      if (currentPage !== 1) arr.push(currentPage - 1);
      arr.push(currentPage);
      if (currentPage !== totalPages) arr.push(currentPage + 1);
      return arr;
    }
    const arr = Array.from(Array(totalPages).keys()).map((i) => ++i);
    return arr;
  }, [totalPages, currentPage]);

  return (
    <div style={paginationContainerStyle}>
      <button style={pageButtonStyle} onClick={handleFirstClick}>
        First
      </button>
      <button
        style={{ ...pageButtonStyle, marginRight: 16 }}
        onClick={handlePrevClick}
      >
        Prev
      </button>
      {pagesArray?.map((item, index) => (
        <button
          key={index}
          onClick={() => handlePageClick(item - 1)}
          style={{
            ...pageButtonStyle,
            fontWeight: item === currentPage ? "bold" : "normal",
            backgroundColor: item === currentPage ? "#ccc" : "#eee",
          }}
        >
          {item}
        </button>
      ))}
      <button
        style={{ ...pageButtonStyle, marginLeft: 16 }}
        onClick={handleNextClick}
      >
        Next
      </button>
      <button style={pageButtonStyle} onClick={handleLastClick}>
        Last
      </button>
    </div>
  );
};
