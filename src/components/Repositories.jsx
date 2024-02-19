
import { Repository } from "./Repository";
import { Pagination } from "./Pagination";

function Repositories({ repo, currentRepo, reposPerPage, setCurrentPage ,currentPage}) {
  return (
    <div className="w-9/12 ">
      <h2 className="text-black text-2xl font-bold mb-4">
        Repositories ({repo.length})
      </h2>
      <div>
        {currentRepo.map((repo) => {
          return <Repository key={repo.id} {...repo} />;
        })}
      </div>
      <Pagination
        reposPerPage={reposPerPage}
        totalRepos={repo.length}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
}
export { Repositories };
