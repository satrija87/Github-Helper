import React, { useState } from "react";
import { UserCard } from "../components/UserCard";
import { Preloader } from "../components/Preloader";
import { Repositories } from "../components/Repositories";

const Main = ({
  user,
  search,
  setSearch,
  repo,
  searchRepos,
  hasError,
  loading,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const reposPerPage = 6;

  const lastRepoIndex = currentPage * reposPerPage;
  const firstRepoIndex = lastRepoIndex - reposPerPage;
  const currentRepo = repo.slice(firstRepoIndex, lastRepoIndex);

  return (
    <main className="flex px-8 py-6 bg-slate-200 h-screen ">
      {loading ? (
        <Preloader />
      ) : (
        <>
          <UserCard user={user} />
          <Repositories
            setCurrentPage={setCurrentPage}
            currentRepo={currentRepo}
            repo={repo}
            searchRepos={searchRepos}
            search={search}
            setSearch={setSearch}
            reposPerPage={reposPerPage}
            currentPage={currentPage}
          />
        </>
      )}
    </main>
  );
};

export { Main };
