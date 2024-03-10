import React from "react";
import { Pages } from "./Pages";

const Pagination = ({
  reposPerPage,
  totalRepos,
  currentPage,
  setCurrentPage,
}) => {
  const nPages = Math.ceil(totalRepos / reposPerPage);
  
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const nextPage = () => {
    if (currentPage !== nPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="flex  justify-end  ">
      <ul className="flex gap-x-2.5 ">
        <span
          className="text-slate-400  w-2.5 mx-2 font-bold  decoration-solid cursor-pointer hover:text-sky-600"
          onClick={() => prevPage()}
        >
          {" "}
          &lt;
        </span>
        <Pages nPages={nPages} currentPage={currentPage} paginate={paginate} />
        <span
          className="text-slate-400 border-2.5  w-2.5 mx-2 font-bold  decoration-solid hover:text-sky-600 cursor-pointer"
          onClick={() => nextPage()}
        >
          {" "}
          &gt;
        </span>
      </ul>
    </div>
  );
};

export { Pagination };
