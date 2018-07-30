import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import './App.css';
import styled from 'styled-components'
import Profile from './components/Profile.js'
import NavBar from './components/NavBar.js'
import Contact from './components/Contact.js'
import Projects from './components/Projects.js'

const AppWide = styled.div`
background: url(https://i.imgur.com/YKzlkyf.jpg);
background-size:100%;
height: 100vh;
width: 100vw;
color: rgba(225, 225, 225, 1);

`

class App extends Component {
  render() {
    return (
      <AppWide className="App">
        <Router>
          <div>

            <NavBar />
            <Switch>
              <Route exact path="/" component={Profile} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/projects" component={Projects} />
            </Switch>
          </div>
        </Router>
      </AppWide>
    );
  }
}

export default App;