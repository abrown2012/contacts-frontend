import React from 'react';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home'
import About from './components/pages/About'
import ContactState from './context/contact/ContactState'
import AuthState from './context/auth/AuthState'
import Signup from './components/auth/Signup'
import Signin from './components/auth/Signin'

function App() {
  return (
    <AuthState>
    <ContactState>
      <Router>
        <Navbar />
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/signup' component={Signup}/>
            <Route exact path='/signin' component={Signin}/>
            
          </Switch>
        </div>
      </Router>
    </ContactState>
    </AuthState>
  );
}

export default App;
