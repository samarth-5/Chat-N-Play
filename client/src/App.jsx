import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home.jsx';
import Login from './Pages/Login.jsx';
import Signup from './Pages/Signup.jsx';
import Chat from './Pages/Chat.jsx';
import About from './Pages/About.jsx';
import ScrollToTop from './Components/ScrollToTop.jsx';
import Header from './Components/Header.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/chat' element={<Chat />} />
        </Routes>
    </BrowserRouter>
  )
}