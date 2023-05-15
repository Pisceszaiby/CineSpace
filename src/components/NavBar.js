import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function NavBar() {

    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = async (event) => {
        if (window.location.pathname !== "/search-results")
            event.preventDefault();
        try {
            const response = await axios.get('http://localhost:4000/movies/search', { params: { q: query } });
            if (response.status === 200) {
                navigate("/search-results");
            } else {
                console.log("Error");
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <nav class="navbar navbar-expand-lg navbar-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">CINESPACE</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                        <li class="nav-item">
                            <a class="nav-link" href="/watchlist">WATCHLIST</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/movies">POPULAR</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                GENRE
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="/genre/action">ACTION</a></li>
                                <li><a class="dropdown-item" href="/genre/drama">DRAMA</a></li>
                                <li><a class="dropdown-item" href="/genre/thriller">THRILLER</a></li>
                                <li><a class="dropdown-item" href="/genre/mystery">MYSTERY</a></li>
                                <li><a class="dropdown-item" href="/genre/sci-fi">SCI-FI</a></li>
                                <li><a class="dropdown-item" href="/genre/horror">HORROR</a></li>
                                <li><a class="dropdown-item" href="/genre/romance">ROMANCE</a></li>
                                <li><a class="dropdown-item" href="/genre/western">WESTERN</a></li>
                                <li><a class="dropdown-item" href="/genre/comedy">COMEDY</a></li>
                                <li><a class="dropdown-item" href="/genre/crime">CRIME</a></li>
                                <li><a class="dropdown-item" href="/genre/animation">ANIMATION</a></li>
                                <li><a class="dropdown-item" href="/genre/adventure">ADVENTURE</a></li>
                                <li><a class="dropdown-item" href="/genre/war">WAR</a></li>
                            </ul>
                        </li>

                    </ul>
                    <form className="d-flex" onSubmit={handleSearch}>
                        <input
                            id="navbarmovie"
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <button className="btn search-button" type="submit">
                            <img width="30px" height="30px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADR0lEQVR4nO1Zy2oUQRQtF+rWjUZ8LNRPcGF8/oKgUaIRRP0AISoGweguyQ8IrjQLIYQs1IhrTdz4+oHgxk1m6pweAhmnqzqZ2HI71cMwi5hJV/dkhjnQTMN0n1u3qu6jTivVRx+7D3+0PmyAuxaYNuRPCwQGWJPLkjTkj+Q/re9Uy+UBtdsQApcMOW+AdUvG27nkWQO8D4GLnR6/MlqfMuTHpsHVLfnZAqO1IDhTLZUOxXG8Vy65rwXBoCUfWHLBPbv5HvnBlMsnO+JESI4YsuoGUjPAxOry8sHtvi+OGWDSkKGbhNUIuKGKhAXGm2ZzphYER3fKVQuCY4acbWw74KkqAoZ87mbwr9zHcbzHB68F7htgoxBnQnLEObFhtR7yzR8B11JnImBY5RjYSUxY8nEuRmRlyLE0ZkypdMK7gTQ7SUyoHCFbNY0ZQ857rxOOOAwrleMqZ0jykExoyTjU+oI3YpkZt9wT3kj/ZxOYdDbf+Ww7pArX26kTWeHqTF3aG7nPTGiAey7AP6mCYcnFZHsFwe3sZMC0y+2jXkbXjm3yoZvEV5nJki6WjKV3UgUj1Pqci5NvmcmkFReyIuMjRbVcHnArgsxkBoiELI7jfapgxEtL+13at73hCLDaK1vrl89gH1QFI9T6vHNksVfS78vMZImYsEm2oAqGJb8ktoPgipd9mrYoXlqF9luU9Xhl5YAXUlE7XPaY9EK4PZtTLvXOeiMNK5WzjtQU3cavkae9kjdaeXLW1zl9i4PVnNsBb70bkGOnFCYX+GMqJ1jgibPBGnkkFyOiO6XigwgFOfBfbygp5GWVJ0SqaSgp5JiPbSYcshKpE/Irio3KG6kzacyIyLZTLkkeaUy0aMP1iLyp8oboTmnMiCghqbmdOuPqxJRkwob806QHN5xBATJqkgBcNmsSsRektZBDkRRT6Zrlknt3UHokvVOLiD0jgS0r0DFnBCLZiNrR5meFyABvWpvRLZwZVkVBtosIBRZ4bYDvyccdGbAUN+C3Ab5a4IUMaqtjgaxAx53xrAOvtzoTkrdUDzkzoroNUS85Y7Ue6nlnoiKKZk7OrPWd6YYEYIFx1Y2wWl9tbDPgmepmWK2HCvuc3UcfKsE/Eph2+6K5PDoAAAAASUVORK5CYII="></img>
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    );
}



export default NavBar;

