import React from "react";

function RepoCard({ repo }) {
  return (
    <div key={repo.full_name} className="repository">
      <div className="repository__avatar">
        <img src={repo.owner.avatar_url} alt="Repoistory Avatar" />
      </div>
      <div className="repository__details">
        <h3 className="repository__name">{repo.name}</h3>
        <div className="repository__description">{repo.description}</div>
        <div className="repository__stats">
          <span className="repository__stars">
            Stars: {repo.stargazers_count}
          </span>
          <span className="repository__issues">
            Issues: {repo.open_issues_count}
          </span>
          <span className="repository__date">
            submitted{" "}
            {new Date(repo.pushed_at)
              .toDateString()
              .split(" ")
              .slice(1)
              .join(" ")}{" "}
            by {repo.owner.login}
          </span>
        </div>
      </div>
    </div>
  );
}

export default RepoCard;
