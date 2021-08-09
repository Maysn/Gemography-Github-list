import { useState } from 'react';
import './App.css';
import ReposList from './components/reposList';

function App() {
  const [reachedBot, setReachedBot] =useState(false);
  const handleScroll = (e) => {
    const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) { 
        console.log("bottom")
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
