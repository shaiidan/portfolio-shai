import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import { connect } from 'react-redux';
import Paginate from 'react-paginate';
import getAllRepos from './githubAPI';
import './Projects.css';
import {AiFillGithub as IconGithub} from 'react-icons/ai'

class Projects extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      repos: [],
      offset:0,
      perPage:1,
      currentPage:0
    }
    this.handlePageClick = this.handlePageClick.bind(this);
  }

 
  async componentDidMount() {
    await this.receivedRepos();
  }

  
  async receivedRepos(){
    const data = await getAllRepos();
    const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
    const postRepos = slice.map(function(repo, index) {
      return ( 
      <div className='repo' key={index}  >
         <h4>{repo.repo_name}</h4>
          <div className='repo-body'>
            <p>{repo.description}</p>
            <div className='repo-link'>
              <button><a href={repo.html_url}><IconGithub size={'30px'} className="repo-icon"/></a></button>
            </div>
          </div>
      </div>
      );
    });
    this.setState({
        pageCount: Math.ceil(data.length / this.state.perPage),
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
              <br/>
              <h1>My projects</h1>
              {this.state.postRepos !== undefined ?
                <div className="Pages">
                {this.state.postRepos}
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
                : null 
              }
              <br/>
            </div>
            <Footer />
          </>
        );
    }
}

const storeToProps = (state) => {return {isDarkMode:state.darkMode.isDarkMode}};

export default connect(storeToProps)(Projects);
  