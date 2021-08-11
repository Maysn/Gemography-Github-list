import React, { useEffect, useState } from "react";
import RepoCard from "../../components/repoCard";
import "./styles.scss";

function ReposList({ reachedBot, setReachedBot }) {
  const [RepositoriesList, setRepositoriesList] = useState();
  const [count, setCount] = useState(2);

  //   fetching initial list
  useEffect(() => {
    fetch(
      "https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc"
    )
      .then((response) => response.json())
      .then((list) => setRepositoriesList(list.items));
  }, []);
  console.log(RepositoriesList);

  //   fetching following lists on reaching bottom
  useEffect(() => {
    if (reachedBot) {
      fetch(
        `https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page=${count}`
      )
        .then((response) => response.json())
        .then((data) => {
          setRepositoriesList((RepositoriesList) => [
            ...RepositoriesList,
            ...data.items,
          ]);
          setReachedBot(false);
          setCount((count) => count + 1);
        });
    }
  }, [reachedBot, setReachedBot, count]);
  console.log(count);

  return (
    <div className="repositories">
      {RepositoriesList?.map((repo) => (
        <RepoCard key={repo.full_name} repo={repo} />
      ))}
    </div>
  );
}

export default ReposList;
