import React from 'react';

function NavBar() {

    return (
        <nav class="navbar navbar-expand-lg navbar-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">MovieDB</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                        <li class="nav-item">
                            <a class="nav-link" href="/watchlist">Watch List</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/movies">Popular</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Genre
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="/genre/action">Action</a></li>
                                <li><a class="dropdown-item" href="/genre/drama">Drama</a></li>
                                <li><a class="dropdown-item" href="/genre/thriller">Thriller</a></li>
                                <li><a class="dropdown-item" href="/genre/mystery">Mystery</a></li>
                                <li><a class="dropdown-item" href="/genre/sci-fi">Sci-fi</a></li>
                                <li><a class="dropdown-item" href="/genre/horror">Horror</a></li>
                                <li><a class="dropdown-item" href="/genre/romance">Romance</a></li>
                                <li><a class="dropdown-item" href="/genre/western">Western</a></li>
                                <li><a class="dropdown-item" href="/genre/comedy">Comedy</a></li>
                                <li><a class="dropdown-item" href="/genre/crime">Crime</a></li>
                                <li><a class="dropdown-item" href="/genre/animation">Animation</a></li>
                                <li><a class="dropdown-item" href="/genre/adventure">Adventure</a></li>
                                <li><a class="dropdown-item" href="/genre/war">War</a></li>
                            </ul>
                        </li>

                    </ul>
                    <form class="d-flex">
                        <input id="navbarmovie" class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;