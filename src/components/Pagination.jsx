import React from "react";

function Pagination({ reposPerPage, totalRepos, currentPage, setCurrentPage }) {
  const pageNumbers = [];

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    console.log(currentPage);
  };
  for (let i = 1; i <= Math.ceil(totalRepos / reposPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex  justify-end  ">
      <ul className="flex gap-x-2.5 ">
        <span className="text-slate-400 border-2.5  w-2.5 mx-2 font-bold  decoration-solid">
          {" "}
          &lt;
        </span>
        {pageNumbers.map((number) => {
          let activeClass =
            currentPage === number ? "text-white bg-sky-600 px-2 py-1" : "";

          return (
            <li
              key={number}
              className="text-slate-400 border-2.5  w-2.5 mx-2 font-bold  decoration-solid   "
            >
              <a
                href="!#"
                className={activeClass}
                onClick={() => {
                  return paginate(number);
                }}
              >
                {number}
              </a>
            </li>
          );
        })}
        <span className="text-slate-400 border-2.5  w-2.5 mx-2 font-bold  decoration-solid">
          {" "}
          &gt;
        </span>
      </ul>
    </div>
  );
}

export { Pagination };
