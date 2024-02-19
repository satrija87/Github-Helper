import icon from "../assets/github-icon.png";
import { Search } from "../components/Search";

function Header(props) {
  const { user, setUser, search, setSearch, searchUsers, searchRepos } = props;
  return (
    <div className="bg-sky-600 px-8 py-2.5 flex">
      <img src={icon} alt="icon"></img>
      <Search
        user={user}
        setUser={setUser}
        search={search}
        setSearch={setSearch}
        searchUsers={searchUsers}
        searchRepos={searchRepos}
      />
    </div>
  );
}
export { Header };
