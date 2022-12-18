import './App.css';
import Home from './components/home';
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';
import Contact from './components/contact';
import About from './components/about';
import Blog from './components/blog';
import BlogPost from './components/blogpost';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Thanks from './components/thanks';
import Login from './components/login';
import Register from './components/register';
import Logout from './components/logout';
import Error from './components/error';
import {initialState, reducer} from './reducer/UseReducer';
import React, { createContext, useReducer } from 'react';

export const UserContext = createContext();

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>

      <UserContext.Provider value={{ state, dispatch }}>

        <Router>
          <Header />
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/blog' exact element={<Blog />} />
            <Route path='/blogpost' exact element={<BlogPost />} />
            <Route path='/about' exact element={<About />} />
            <Route path='/contact' exact element={<Contact />} />
            <Route path='/thanks' exact element={<Thanks />} />
            <Route path='/login' exact element={<Login />} />
            <Route path='/register' exact element={<Register />} />
            <Route path='/logout' exact element={<Logout />} />
            <Route path='/*' exact element={<Error />} />
          </Routes>
          <Footer />
        </Router>

      </UserContext.Provider>

    </div>
  );
}

export default App;
