// import logo from './logo.svg';
import React, { useState } from "react";
import { Header } from "./layouts/Header";
import { Main } from "./layouts/Main";
import axios from "axios";

function App() {
  const [user, setUser] = useState([]);
  const [search, setSearch] = useState("");
  const [repo, setRepo] = useState([]);
  const [hasError, setHasError] = useState(false);

  const searchRepos = async (str) => {
    const apiUrl = `https://api.github.com/users/${str}/repos`;
    await axios
      .get(apiUrl)
      .then((resp) => {
        setRepo(resp.data);
        setHasError(false);
      })
      .catch((err) => setHasError(true));
  };

  const searchUsers = async (str) => {
    const apiUrl = `https://api.github.com/users/${str}`;

    await axios
      .get(apiUrl)
      .then((resp) => {
        setUser(resp.data);
        setHasError(false);
      })
      .catch((err) => setHasError(true));
  };

  return (
    <div className="App">
      <Header
        user={user}
        setUser={setUser}
        search={search}
        setSearch={setSearch}
        searchUsers={searchUsers}
        searchRepos={searchRepos}
      />
      {!hasError ? (
        <Main
          user={user}
          setUser={setUser}
          search={search}
          setSearch={setSearch}
          repo={repo}
          hasError={hasError}
          setHasError={setHasError}
        />
      ) : (
        <h1 className=" px-8 py-6 bg-slate-200 h-screen text-center font-bold text-xl text-amber-700">
          No users have found
        </h1>
      )}
    </div>
  );
}

export default App;
