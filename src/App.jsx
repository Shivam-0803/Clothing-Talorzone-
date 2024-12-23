import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import CardContainer from './Components/CardContainer';
import AboutUs from './Components/AboutUs';
import Card from './Components/Card';
import Header from './Components/Header'; // Import Header component
import Ethnic from './Components/Ethnic'; // Import Ethnic-wear component
import Login from './Components/Login'; // Import Login component
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import BestSeller from './Components/Bestseller';
// import Footer from './Footer';


const App = () => {
    const [cartCount, setCartCount] = useState(0);

    const updateCartCount = (count) => {
        setCartCount(count);
    };

    return (
        <Router>
            <div className="App">
                {/* Use the Header component */}
                <Header cartCount={cartCount} />

              
    <Routes>
        <Route path="/" element={<CardContainer updateCartCount={updateCartCount} />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/card/:id" element={<Card updateCartCount={updateCartCount} />} />
        <Route path="/ethnic-wear" element={<Ethnic updateCartCount={updateCartCount} />} />
        <Route path="/Login" element={<Login updateCartCount={updateCartCount} />} />
        {/* <Route path="/Login" element={<Login updateCartCount={updateCartCount} />} /> */}
        <Route path="/BestSeller" element={<BestSeller />} />
        
    </Routes>



                {/* <footer className="footer">
                    <p>&copy; 2024 Talorzone by Sahiba. All Rights Reserved.</p>
                </footer> */}
            </div>
        </Router>
    );
};

export default App;
