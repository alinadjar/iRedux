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

import ListUsrs from './Components/ListUsrs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <Provider store={storeRedux}>
        <div>
          <h1>Main App Screen</h1>
          <ListUsrs />
        </div>
      </Provider>
    );
  }
}

export default App;
