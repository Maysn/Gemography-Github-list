import React, { useEffect, useState } from 'react';

function ReposList({reachedBot, setReachedBot}) {
    const [RepositoriesList, setRepositoriesList] = useState();
    const [count, setCount] = useState(2);

    useEffect(() => {
        fetch('https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc')
        .then(response => response.json())
        .then(list => setRepositoriesList(list.items))
    },[])
    console.log(RepositoriesList)
    
useEffect(()=> {
    if(reachedBot){
        fetch(`https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page=${count}`)
        .then(response => response.json())
        .then(data => setRepositoriesList(RepositoriesList => RepositoriesList.concat(data.items)))
        setCount(count => count + 1)
    }
},[reachedBot, count])

console.log(count)

useEffect(()=>{
    setReachedBot(false);

})

    const repositoryDetails = RepositoriesList?.map((repo) => {
        return <div key={repo.full_name} className="repository">
            <div className="repository__avatar">
                <img src={repo.owner.avatar_url} alt="Repoistory Avatar"/>
            </div>
            <div className="repository__details">
                <h3 className="repository__name">{repo.name}</h3>
                <div className="repository__description">{repo.description}</div>
                <div className="repository__stats">
                    <span className="repository__stars">{repo.stargazers_count}</span>
                    <span className="repository__issues">{repo.open_issues_count}</span>
                    <span className="repository__date">{repo.pushed_at}</span>
                </div>
            </div>
        </div>
    })
    return (
        <div>
            {repositoryDetails}
        </div>
    );
}

export default ReposList;