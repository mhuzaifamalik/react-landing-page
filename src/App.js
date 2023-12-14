import React from 'react';
import { Routes, Route } from "react-router-dom"
import './App.css';
import Home from "./pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Header from './components/Header';
import Cursor from './components/Cursor';
import Footer from './components/Footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import Zendesk, { ZendeskAPI } from "./zendexconfig";
import Thankyou from './components/Thankyoumuch';
const ZENDESK_KEY = "f2a1408c-2b43-4a0d-beee-5594d6898370";



const App = () => {
    const handleLoaded = () => {
        ZendeskAPI("messenger", "open");
    };

    return (
        <>
            <Cursor />
            <Header />
            <Routes>
                <Route path="/custom-website-development/" element={<Home />} />
                <Route path="/custom-website-development/thankyou" element={<Thankyou />} />
            </Routes>

            <Footer />
            <Zendesk defer zendeskKey={ZENDESK_KEY} onLoaded={handleLoaded} />
        </>
    )
}

export default App;
