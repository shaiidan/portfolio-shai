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
      repoNew = {...repoNew, languages:getLanguagesForProgressBar(languages)};
      reposNew.push(repoNew);
    }
    
    return reposNew;
}

export default getAllRepos;

const getLanguagesForProgressBar = (languages) => {
  let languagesArray = [];
  let languagesForProgressBar = [];
  for(var lan in languages){
    languagesArray.push([lan,languages[lan]])
  }
  const sumLanguagesPercent = languagesArray.map((item)=>{return item[1]}).reduce((a,b)=>a+b,0);
  languagesArray.forEach((language) =>{
    languagesForProgressBar.push({
      name:language[0],
      value:Number((language[1]/sumLanguagesPercent) * 100).toFixed(1),
      color:COLORS[language[0]] || COLORS['default']
    })
  })
  console.log(languagesForProgressBar);
  return languagesForProgressBar;
}

const COLORS = {
  JavaScript: '#fffd12',
  Shell: '#92ff12',
  Solidity: '#b116fc',
  HTML: '#ff0000',
  CSS: '#121efc',
  Java: '#552809',
  default:'#ffffff'
}