import React from 'react';
import Home from './pages/Home';
import MovieInfo from './pages/MovieInfo';
import Movies from './pages/Movies';
import About from './pages/About';
import Contact from './pages/Contact';
import { Route, Routes } from 'react-router-dom';
function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movieInfo" element={<MovieInfo />} />
        </Routes>
    );
}
export default Router;
