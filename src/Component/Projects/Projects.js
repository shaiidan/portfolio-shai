import React from 'react';
import Footer from '../Templetes/Footer';
import Header from '../Templetes/Header';
import { connect } from 'react-redux';
import Paginate from 'react-paginate';
import getAllRepos from './githubAPI';
import {AiFillGithub as IconGithub} from 'react-icons/ai'
import MultiColorProgressBar from './MultiColorProgressBar';
import { Spinner } from 'react-bootstrap';
import './Projects.css';


class Projects extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      repos: [],
      offset:0,
      perPage:2,
      currentPage:0
    }
    this.handlePageClick = this.handlePageClick.bind(this);
  }

 
  async componentDidMount() {
    const repos = await getAllRepos();
    this.setState({repos});
    this.receivedRepos();
  }

  
  receivedRepos(){
    if(this.state.repos === undefined || this.state.repos === null || !Array.isArray(this.state.repos)){
      return;
    }

    const slice = this.state.repos.slice(this.state.offset, this.state.offset + this.state.perPage)
    
    const postRepos = slice.map(function(repo) {
      return ( 
          <div className='repo' key={repo.id}  >
             <div className='repo-header'>
                <h4>{repo.repo_name}</h4>
             </div>
             <div className='repo-body'>
                <p>{repo.description}</p>
                <div className='repo-languages'>
                    <MultiColorProgressBar readings={repo.languages} />
                </div>
             </div>
             <div className='repo-link'>
                    <button><a href={repo.html_url}><IconGithub size={'30px'} className="repo-icon"/></a></button>
             </div>        
          </div>
      );
    });
    
    this.setState({
        pageCount: Math.ceil(this.state.repos.length / this.state.perPage),
        postRepos
    })
  }

  handlePageClick(e){
    const selectedPage = e.selected ;
    const offset = selectedPage * this.state.perPage;
  
    this.setState(
      {
        currentPage: selectedPage,
        offset: offset 
      }, () => { this.receivedRepos()}
    );
  }

    render(){

      const isDarkMode = this.props.isDarkMode;

        return(
          <>
            <Header />
            <div className='Projects' data-theme={isDarkMode ? "dark" : "light"}>
                <h1>My projects</h1>
              {this.state.postRepos !== undefined && this.state.postRepos !== null && this.state.postRepos.length !== 0 ?
                <div className="Pages">
                  <div className='repos'>{this.state.postRepos} </div>
                  <Paginate
                    previousLabel={"<"}
                    nextLabel={">"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={10}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"} />
                </div>
                : <div className='loading'><Spinner animation="border" /></div> 
              }
              
            </div>
            <Footer />
          </>
        );
    }
}

const storeToProps = (state) => {return {isDarkMode:state.darkMode.isDarkMode}};

export default connect(storeToProps)(Projects);



