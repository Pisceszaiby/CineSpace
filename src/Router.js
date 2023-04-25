import React from 'react';
import Home from './pages/Home';
import MovieInfo from './pages/MovieInfo';
import Movies from './pages/Movies';
import { Route, Routes } from 'react-router-dom';
import WatchList from './pages/WatchList';
function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/watchlist" element={<WatchList />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movieinfo" element={<MovieInfo />} />
        </Routes>
    );
}
export default Router;
