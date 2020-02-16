import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import storeRedux from './iRedux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from "react-router-dom";


import ListUsers from './Components/ListUsrs';
import TodoPage from './Components/TodoPage';
import PostPage from './Components/PostPage';
import Spinner from './Components/Spinner';


import './Components/CSS/spinner.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Provider store={storeRedux}>
        <Router>
          <Link to='/' className='btn btn-primary'> Home </Link>
          <Link to='/todo' className='btn btn-primary'> go /todo </Link>
          <Link to='/posts' className='btn btn-primary'> go /posts </Link>

          <Switch>
            <Route path='/' component={ListUsers} exact={true} />
            <Route path='/todo' component={TodoPage} />
            <Route path='/posts' component={PostPage} />
            <Redirect to='/' />
          </Switch>


          <Spinner />


        </Router>
      </Provider>
    );
  }
}




export default App;
