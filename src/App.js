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
          <Link to='/todo' className='btn btn-primary'> go to link </Link>

          <Switch>
            <Route path='/' component={ListUsers} exact={true} />
            <Route path='/todo' component={TodoPage} />
            <Redirect to='/' />
          </Switch>

          {
            true &&
            <div style={{ position: 'absolute', left: 0, top: 0, backgroundColor: 'rgba(160, 186, 207, 0.37)', width: '100%', height: '100%' }} className='spinner'>
            </div>
          }

        </Router>
      </Provider>
    );
  }
}

export default App;
