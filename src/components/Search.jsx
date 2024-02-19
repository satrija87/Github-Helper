import React from "react";
import searchIcon from "../assets/search.png";


function Search({
  search,
  setSearch,
  searchRepos,
  searchUsers,
 
}) {
  let handleQuery = (str) => {
    searchRepos(str);
    searchUsers(str);
    setSearch("");
  };

  let handleKey = (e) => {
    if (e.key === "Enter") {
      return handleQuery(search);
    }
  };
  return (
    <div className="inline-flex ml-2.5  w-2/4 rounded-lg w-2/4 bg-white items-center">
      <img src={searchIcon} alt="search-icon" className="size-4 flex m-2"></img>
      <input
        type="search"
        id="search"
        className="border-0 outline-none rounded-lg w-full"
        placeholder="Enter GitHub username"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        onKeyDown={(e) => handleKey(e)}
      />
      <button
        className="mx-2.5 bg-sky-600 px-1.5 py-0.5 rounded text-white"
        onClick={() => {
          return handleQuery(search);
        }}
      >
        search
      </button>
    </div>
  );
}

export { Search };
// #A9A4A4
