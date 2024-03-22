import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

function ForumPagination({
  currentPage,
  handlePageChange,
  //   renderPaginationItems,
  totalPages,
}) {
  const renderPaginationItems = () => {
    const paginationItems = [];
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, startPage + 4);

    for (let i = startPage; i <= endPage && i <= totalPages; i++) {
      // if (i <= totalPages) { // Check if i is within the valid range of pages
      paginationItems.push(
        <PaginationItem key={i}>
          <PaginationLink
            isActive={i === currentPage}
            className={"cursor-pointer"}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
      // }
    }

    return paginationItems;
  };
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            className={`cursor-pointer ${
              currentPage <= 1 && "pointer-events-none opacity-50"
            }`}
            onClick={() => handlePageChange(currentPage - 1)}
          />
        </PaginationItem>

        {renderPaginationItems() && renderPaginationItems()}

        <PaginationItem>
          <PaginationNext
            className={`cursor-pointer ${
              currentPage >= totalPages && "pointer-events-none opacity-50"
            }`}
            onClick={() => handlePageChange(currentPage + 1)}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export default ForumPagination;
