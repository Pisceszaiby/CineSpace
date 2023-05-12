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
            <Route path="/movies" element={<Movies category="Popular" />} />
            <Route path="/movieinfo" element={<MovieInfo />} />
            <Route path="/genre/action" element={<Movies category="Action" />} />
            <Route path="/genre/adventure" element={<Movies category="Adventure" />} />
            <Route path="/genre/animation" element={<Movies category="Animation" />} />
            <Route path="/genre/comedy" element={<Movies category="Comedy" />} />
            <Route path="/genre/crime" element={<Movies category="Crime" />} />
            <Route path="/genre/drama" element={<Movies category="Drama" />} />
            <Route path="/genre/horror" element={<Movies category="Horror" />} />
            <Route path="/genre/mystery" element={<Movies category="Mystery" />} />
            <Route path="/genre/romance" element={<Movies category="Romance" />} />
            <Route path="/genre/sci-fi" element={<Movies category="Sci-fi" />} />
            <Route path="/genre/thriller" element={<Movies category="Thriller" />} />
            <Route path="/genre/war" element={<Movies category="War" />} />
            <Route path="/genre/western" element={<Movies category="Western" />} />

        </Routes>
    );
}
export default Router;
