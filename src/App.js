import React, { useState } from "react";
import "./App.scss";
import ReposList from "./containers/reposList";

function App() {
  const [reachedBot, setReachedBot] = useState(false);
  const handleScroll = (e) => {
    const bottom =
      e.target.clientHeight + e.target.scrollTop + 50 >= e.target.scrollHeight;
    if (bottom) {
      console.log("bottom");
      console.log(e.target.clientHeight);
      console.log(e.target.scrollHeight - e.target.scrollTop);
      setReachedBot(true);
    }
  };
  return (
    <div className="App" onScroll={handleScroll}>
      <ReposList reachedBot={reachedBot} setReachedBot={setReachedBot} />
      {reachedBot && <div className="loading">Loading...</div>}
    </div>
  );
}

export default App;
