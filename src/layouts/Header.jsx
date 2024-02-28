import icon from "../assets/github-icon.png";
import { Search } from "../components/Search";
import { Link } from "react-router-dom";

const Header = (props) => {
  const { user, setUser, search, setSearch, searchUsers, searchRepos } = props;

  return (
    <div className="bg-sky-600 px-8 py-2.5 flex">
      <Link to="https://github.com/">
        <img src={icon} alt="icon"></img>
      </Link>
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
};
export { Header };
