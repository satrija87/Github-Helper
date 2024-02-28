import React, { useState } from "react";
import { Header } from "./layouts/Header";
import { Main } from "./layouts/Main";
import axios from "axios";

import { HomePage } from "./components/HomePage";

const App = () => {
  const [user, setUser] = useState([]);
  const [search, setSearch] = useState("");
  const [repo, setRepo] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(true);

  const searchRepos = async (str) => {
    setLoading(true);
    const apiUrl = `https://api.github.com/users/${str}/repos`;
    await axios
      .get(apiUrl)
      .then((resp) => {
        setRepo(resp.data);
        setHasError(false);
        setLoading(false);
      })
      .catch((err) => setHasError(true));
  };

  const searchUsers = async (str) => {
    setLoading(true);
    const apiUrl = `https://api.github.com/users/${str}`;

    await axios
      .get(apiUrl)
      .then((resp) => {
        setUser(resp.data);
        setHasError(false);
        setLoading(false);
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

      {user.length !== 0 && !hasError ? (
        <Main
          user={user}
          setUser={setUser}
          search={search}
          setSearch={setSearch}
          repo={repo}
          hasError={hasError}
          setHasError={setHasError}
          setLoading={setLoading}
          loading={loading}
        />
      ) : (
        <HomePage hasError={hasError} />
      )}
    </div>
  );
};

export default App;
