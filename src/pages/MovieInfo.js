import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

function MovieInfo() {
    const { id } = useParams();
    const [selMovie, setMovies] = useState([]);
    const getMovieRequest = async () => {
        const url = 'http://localhost:4000/movies/';
        try {
            const response = await fetch(url);
            var result = await response.json();

            var movie = result.filter(movie => movie._id === id)
            setMovies(movie[0]);
        } catch (error) {
            console.error(error);
        };
    };
    useEffect(() => {
        getMovieRequest();
    }, []);
    const name = selMovie.name;

    const urlhref = `http://localhost:3000/movies/${id}/`;
    function addToWatchList() {
        axios.put(`http://localhost:4000/movies/${name}/`, { watchlist: true })
            .then((res) => {
                console.log(res.data)
                console.log('Movie successfully updated')
            }).catch((error) => {
                console.log(error)
            })
    }
    function removeFromWatchList() {
        axios.put(`http://localhost:4000/movies/${name}/`, { watchlist: false })
            .then((res) => {
                console.log(res.data)
                console.log('Movie successfully updated')
            }).catch((error) => {
                console.log(error)
            })
    }
    return (
        <div class="container">
            <h5 class="title">TITLE: {selMovie.name}</h5>
            {selMovie.watchlist ? <a href={urlhref} onClick={removeFromWatchList}><img class="add" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACvElEQVR4nO2YO2gUURSGj09Q4878/90QAil9IYqCgpViZyMoFpaWVoqK+OhEEbRVAirBJirIJvfOKkHQrFr4QAUhBCViY2lUEGQtjEpG7iaR1Z3NzuxrZmB/+GEYmHPPx7mvOSIdddRRRx0lWXml1mrglAYKBpjQwHdDThngowEeaeCsdt1NYeN5jrPZAOfst6UY5FQpJjBhgFEPOGmy2TVNAxhSaqsBHhrSD2NNPhl23R1VAZTaacinoeMBBS+b3VI3wDWRJQbo1+R02EHLYOw3V3N9fcvm4tlnQw5EjWXm4gGXH4ssjgQx4jgolbyOQf9L4LmNlctkqIEXDccDCp7juFEq0TBEGcwzC9S0eEAhVGXsdGrWoC0zcKnmwq5nTbTbmpyedwOIsjvFbmA0EGJYqXWxJ8eIDjpnDHA69sQYuSongkBGUwjyIAjkfeyJMZo18C4IpJjCihQrQewFMG0VIX9UgGjySwor8ikIZDz2xBjZY0FT63YCEvMj+lblgQgcT0BifhRr8mjl1AI2xJ2YiWh7G6kAmZ1eb1JUjfFAiFmQIykCOVwV5H5Pzwq7pcWdpKntz3mlVlYFKa0V8lgCEvVr+JDUkv2NNMDrBCTrV/FY6CaEB2yc7Vv5iTJQtLurRJEh9yXpt1fPtIT2Sz3S5IXEgADnpV7lRBYZ8mbcEAYYPCOyUBqRDaCB6zGCDDQM8Q8MeSWGSvT7Iguk2fKAg5r81QaI37bzL63UMLBLk19bBaGBb8Z1d7cU4i9MNrvaAK9aAPHyTnf3Kmmn7Olqy2/Inw0DzEzXizmRpRKX8uS2RlpJmvzgue52SYLu9vYutx3yOnalwZq32DjkKbVXA5Mh1sKkUWqPJFkjjgNN3pinCkO5rq5uSYs0eaD8Bm2f7TtJo/Lkeg28tbbPkmbdIzPWcefRkbRZfwAt8qSwjcVLJwAAAABJRU5ErkJggg=="></img><h6>{"Remove from Watchlist"}</h6></a>
                : <a href={urlhref} onClick={addToWatchList}><img class="add" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACsklEQVR4nO2ZzWsTQRjGx/oBKooK/gd+IYqCgifFmxdB8eCxR0+KivhxVQS9KgWF4qUqSP0PbDTQ7PPsViKGsDtv7EXw0qogSHqwKlmZNFXbbpvddJPZhTzwwF7yzvvLO/Pu7IxSffXVV199ZVniOHs1cFPIgiZFgBkBZgWY0uQbAW5/KJUOxY3nO85hIe+0fjvVijXTij0WkDf0xMSeNAGOavK1kGEca6AUACeWjee6JzXgxI0nZEE870jHAOVyeb2QQxpoJBh0HqahgcefyI3z8cyzAMNJY8m/eA+LxeK6RBDVUml7s+QdDLrINLF8cocAXgrxCu+LxW2xK5ESxNy/ScIApRVPyEKsypjplOKgXbEmH7Rf2B2siZ6DAI0VG0CS7mTdwFgkRA3YZz05JqxM1HtGA7dsJybJfX3p+gDGMpBYmMjAqyiQSeuJMZk1WYtqu3XbiUly16MqMpvDivyIWuxfcwjyOQqkmkOQStTUepE7EOB5FMi1HFbkStTUOmA7MUlosxtZAtJqwX5uqgFUIyFa0+uy7QQlvi8tC1KpVDablpb5apBfxHG2LAvSXCvk1RyAXFTtZD4jBXiXYYhK7EMIIQ82z60ykLgsdN1011gQf6eY657L0mevBho18nwiiP8qcy9DIHdVpwpHR9dq4JltCCFHwjAc6BikCROGA5p8Yg0CGF41xAIY4JEFkKEwDNeotCXABSF/dX09kL/NyX/qAItgTgn5rWsQwHcNnFa9UOC6uzX5tgsQEz65S/VS5u3avPgBfqYAYabrfd/3NyhbClz32GqOkjTwMXCc4yoLKpfLm8wJeQcgI213sTYUAGcFmG4LAEzXHOeMyrKqc7ddT1dorS8nx8d3qrxIk4MLdtBzN7aDKo/yPW+/AIGxeVZ51qTnbTW2nUdfqsf6AyRKPWueiNk+AAAAAElFTkSuQmCC"></img><h6>{"Add to Watchlist"}</h6></a>
            }
            <div class="row">
                <div class="col-md-4 col-lg-4">
                   <img class="poster" src={selMovie.image_url} alt={selMovie.name}></img>
                </div>
                <div class="col-md-8 col-lg-8">
                    <h5 class="title">GENRE: </h5>{selMovie.genre}
                    <h5 class="title">RELEASE DATE:</h5> {selMovie.year}
                    <h5 class="title">RATING: </h5>{selMovie.rating}
                    <h5 class="title">DIRECTOR:  </h5><h6></h6>{selMovie.directors}
                    <h5 class="title">CAST: </h5><h6></h6>{selMovie.actors}
                    <h5 class="title">PLOT: </h5>{selMovie.desc}
                </div>
            </div >
        </div>
    )
}
export default MovieInfo;
