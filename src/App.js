import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import {BrowserRouter, Route, Routes }from "react-router-dom";
import Home from './pages/Home';
import Project from './pages/Project';
import Stacks from './pages/Stacks';
import Task from './pages/Task';

const App = () => {
  return (
    <BrowserRouter>
        <div className='App'></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/stacks" element={<Stacks />} />        
          <Route path="/task" element={<Task />} />        
        </Routes>
    </BrowserRouter>
  );
};

export default App;