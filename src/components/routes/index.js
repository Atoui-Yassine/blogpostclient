
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from '../../pages/Home';
import Profile from '../../pages/Profile';
import Navbar from '../Navbar';
const index = () => {
    return (
        <Router>
            <Navbar/>
        <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/profile" exact element={<Profile/>} />
           
        </Routes>
          
        </Router>
    );
};

export default index;