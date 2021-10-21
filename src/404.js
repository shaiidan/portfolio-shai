import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <NotFound />,
  document.getElementById('404')
);

const NotFound = () =>{
    return(
        <>
            <div className='route-not-found'>
               <h1>Not Fount 404 !!</h1> <br/>
               <Link to="/">Go to Home</Link>
            </div>
        </>
    ); 
}
