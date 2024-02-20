import React, { useState } from "react";
import { UserCard } from "../components/UserCard";

import { Repositories } from "../components/Repositories";
import { HomePage } from "../components/HomePage";

function Main({ user, search, setSearch, repo, searchRepos, hasError }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [reposPerPage] = useState(6);

  const lastRepoIndex = currentPage * reposPerPage;
  const firstRepoIndex = lastRepoIndex - reposPerPage;
  const currentRepo = repo.slice(firstRepoIndex, lastRepoIndex);

  return (
    <main className="flex px-8 py-6 bg-slate-200 h-screen ">
      {user.length !== 0 && !hasError ? (
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
      ) : (
        <HomePage />
      )}
    </main>
  );
}

export { Main };
