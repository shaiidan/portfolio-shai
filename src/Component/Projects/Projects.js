import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Footer from '../Footer';
import Header from '../Header';


const GITHUB_API = 'https://api.github.com/users/shaiidan/repos';

class Projects extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      repos: []
    }
  }

  async fetchRepos(){
    const response = await fetch(GITHUB_API);
    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      return new Error(message);
    }
    const repos = await response.json();
    return repos;
  }

  async fetchRepoLanguages(repo_name){
    const response = await  fetch(`https://api.github.com/repos/shaiidan/${repo_name}/languages`);
    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      return new Error(message);
    }
    const languages = await response.json();
    return languages;
  }

  async getAllRepos(){
    const reposNew = [];
    const repos = await this.fetchRepos();
    if(typeof repos === Error){
      return null; 
    }

    for(const repo of repos){
      let repo_new = {repo_name:repo.name,html_url:repo.html_url}; 
      const languages = await this.fetchRepoLanguages(repo.name);
      repo_new = {reposNew, languages:languages};
      reposNew.push(repo_new);
    }
    
    return reposNew;
  }

  async componentDidMount() {
    const repos = await this.getAllRepos();
    if(repos !== null){
      this.setState({repos:repos});
    }
  }

    render(){
        return(
          <>
            <Header />
            <p>sss{ console.log(this.state.repos)}</p>
            <Carousel variant="dark">
              <Carousel.Item>
                <Carousel.Caption>
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Carousel.Caption>
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            <Footer />
          </>
        );
    }
}

export default Projects;
  