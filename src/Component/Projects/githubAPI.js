const GITHUB_API = 'https://api.github.com/users/shaiidan/repos';

const fetchRepos = async () => {
    const response = await fetch(GITHUB_API);
    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      return new Error(message);
    }
    const repos = await response.json();
    return repos;
}

const fetchRepoLanguages = async (repo_name) => {
    const response = await fetch(`https://api.github.com/repos/shaiidan/${repo_name}/languages`);
    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      return new Error(message);
    }
    const languages = await response.json();
    return languages;
}

const getAllRepos = async () => {
    const reposNew = [];
    const repos = await fetchRepos();
    if(typeof repos === Error){
      return null; 
    }

    for(const repo of repos){
      let repoNew = {
        repo_name:  repo.name,
        description:  repo.description,
        html_url: repo.html_url,
      }; 
      const languages = await fetchRepoLanguages(repo.name);
      repoNew = {...repoNew, languages:languages};
      reposNew.push(repoNew);
    }
    
    return reposNew;
}

export default getAllRepos;