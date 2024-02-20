import React from "react";

function Pagination({ reposPerPage, totalRepos, currentPage, setCurrentPage }) {
  const pageNumbers = [];

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
  let nPages = Math.ceil(totalRepos / reposPerPage);
  for (let i = 1; i <= nPages; i++) {
    pageNumbers.push(i);
  }

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
        {pageNumbers.map((number) => {
          let activeClass =
            currentPage === number
              ? "text-white bg-sky-600 px-2 py-1"
              : "px-2 py-1";

          return (
            <li
              key={number}
              className="text-slate-400 border-2.5  w-2.5 mx-2 font-bold  decoration-solid cursor-pointer  "
            >
              <span
                className={activeClass}
                onClick={() => {
                  return paginate(number);
                }}
              >
                {number}
              </span>
            </li>
          );
        })}
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
}

export { Pagination };
