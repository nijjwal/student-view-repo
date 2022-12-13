import logo from './logo.svg';
import './App.css';
import ListStudentComponent from './components/ListStudentComponent';
import CreateStudent from './components/CreateStudent';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import {Routes, Route} from "react-router";
import React from 'react';
import ComponentC from './components/ComponentC';

export const UserContext = React.createContext();

function App() {
  return (
    <div>

      <UserContext.Provider value={'Nijjwal'}>
        <ComponentC/>
        <Router>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/create/">Create</Link></li>
            </ul>
          </nav>
      
          <Routes>
            <Route exact path="/" element={<ListStudentComponent/>}></Route>
            <Route path="/create/" element={<CreateStudent/>}></Route>
          </Routes>
        </Router>
      </UserContext.Provider>
      
    </div>
  );
}

export default App;