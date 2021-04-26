import React, { Component } from 'react';
import '../styles/App.css';

import Hello from './HelloComponent';
import About from './AboutComponent';
import Books from './BooksComponent';

// import route Components here
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <ul>
              <li><Link to="/hello">Hello</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/books">Books</Link></li>
            </ul>
            <hr/>
            <Route path="/hello" component={Hello} />
            <Route path="/about" component={About} />
            <Route path="/books" component={Books} />
          </div>
        </div>
      </Router>
    );
  }
}
export default App;