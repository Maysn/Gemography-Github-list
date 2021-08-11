import React from "react";
import { parseDate } from "../../utils/date";
import "./styles.scss";

function RepoCard({ repo }) {
  return (
    <div className="repository">
      <div className="repository__avatar">
        <img src={repo.owner.avatar_url} alt="Repoistory Avatar" />
      </div>
      <div className="repository__details">
        <h3 className="repository__name">{repo.name}</h3>
        <div className="repository__description">{repo.description}</div>
        <div className="repository__stats">
          <span className="repository__stars">
            Stars: <strong>{repo.stargazers_count}</strong>
          </span>
          <span className="repository__issues">
            Issues: <strong>{repo.open_issues_count}</strong>
          </span>
          <span className="repository__date">
            submitted {parseDate(repo.pushed_at)} by {repo.owner.login}
          </span>
        </div>
      </div>
    </div>
  );
}

export default RepoCard;
