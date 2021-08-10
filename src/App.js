import { useState } from 'react';
import './App.css';
import ReposList from './containers/reposList';

function App() {
  const [reachedBot, setReachedBot] =useState(false);
  const handleScroll = (e) => {
    const bottom = Math.ceil(e.target.scrollHeight - e.target.scrollTop) === e.target.clientHeight;
    if (bottom) { 
        console.log("bottom")
        console.log(e.target.clientHeight)
        console.log(e.target.scrollHeight - e.target.scrollTop)
        setReachedBot(true);
    }
 }  
  return (
    <div className="App" onScroll={handleScroll}>
      <ReposList reachedBot={reachedBot} setReachedBot={setReachedBot}/>
    </div>
  );
}

export default App;
