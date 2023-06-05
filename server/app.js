//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const cors = require("cors")
const mongoose = require('mongoose');
const { redirect } = require("react-router-dom");

const app = express();
var search_results;
app.set('view engine', 'ejs');
app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors())
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/MovieDB", { useNewUrlParser: true });

const movieSchema = {
    _id: Object,
    actors: Array,
    desc: String,
    directors: Array,
    genre: Array,
    image_url: String,
    imdb_url: String,
    name: String,
    rating: Number,
    thumb_url: String,
    year: Number,
    watchlist: Boolean
};

const Movie = mongoose.model("movies", movieSchema);

///////////////////////////////////Requests Targetting all Movies////////////////////////

app.route("/movies")
    .get(async function (req, res) {
        try {
            const foundMovies = await Movie.find();
            res.send(foundMovies);
        } catch (err) {
            res.send(err);
        }
    })

///////////////////////////////////Requests Targetting Updating a specific Movie////////////////////////
app.put('/movies/:name', async (req, res, next) => {
    try {
        const updatedMovie = await Movie.findOneAndUpdate({ name: String(req.params.name) }, { watchlist: req.body.watchlist }, { new: true });
        console.log(req.body.watchlist)
        if (!updatedMovie) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        console.log(updatedMovie);
        res.json(updatedMovie);
    } catch (error) {
        console.error(error);
        next(error);
    }
});


app.get('/movies/search', async (req, res, next) => {
    try {
        const query = req.query.q; // get the query from the URL parameter
        const regex = new RegExp(query, 'i'); // create a regular expression to perform case-insensitive search
        // find the movies that match the search query
        const movies = await Movie.find({
            $or: [
                { name: regex },
                { desc: { $regex: regex } },
                { actors: { $elemMatch: { name: { $regex: `/${query}/i` } } } }
            ]
        });
        console.log("IN GET /MOV/SEARCH INIT", movies)
        search_results = movies;
        res.redirect('/search-results');
    } catch (error) {
        console.error(error);
        next(error);
    }
});
//getting search results
app.get('/search-results', (req, res) => {
    console.log("In get search results")
    console.log(search_results);
    res.json(search_results);

});



app.get('/movies/recommendations', async (req, res, next) => {
    const watch_list_movies = await Movie.find({ watchlist: true });
    const movies = await Movie.find();
    try {
        const recommendations = generateMovieRecommendations(watch_list_movies);
        res.json(recommendations.filter(movie => movie.watchlist == false));
    } catch (error) {
        console.error(error);
        next(error);
    }
    function generateMovieRecommendations(referenceMovies) {

        const sameActorMovies = [];
        referenceMovies.forEach(referenceMovie => {
            movies.forEach(movie => {
                if (
                    movie.actors.some(actor => referenceMovie.actors.includes(actor)) &&
                    !sameActorMovies.some(sameActorMovie => sameActorMovie._id === movie._id) &&
                    movie._id !== referenceMovie._id
                ) {
                    sameActorMovies.push(movie);
                }
            });
        });


        const sameDirectorMovies = [];
        referenceMovies.forEach(referenceMovie => {
            movies.forEach(movie => {
                if (
                    movie.directors.some(director => referenceMovie.directors.includes(director)) &&
                    !sameActorMovies.some(sameActorMovie => sameActorMovie._id === movie._id) &&
                    !sameDirectorMovies.some(sameDirectorMovie => sameDirectorMovie._id === movie._id) &&
                    movie._id !== referenceMovie._id
                ) {
                    sameDirectorMovies.push(movie);
                }
            });
        });


        const sameGenreMovies = [];
        referenceMovies.forEach(referenceMovie => {
            movies.forEach(movie => {
                if (
                    movie.genre.some(genre => referenceMovie.genre.includes(genre)) &&
                    !sameActorMovies.some(sameActorMovie => sameActorMovie._id === movie._id) &&
                    !sameDirectorMovies.some(sameDirectorMovie => sameDirectorMovie._id === movie._id) &&
                    !sameGenreMovies.some(sameGenreMovie => sameGenreMovie._id === movie._id) &&
                    movie._id !== referenceMovie._id
                ) {
                    sameGenreMovies.push(movie);
                }
            });
        });

        const recommendations = [...sameActorMovies, ...sameDirectorMovies, ...sameGenreMovies];

        const uniqueRecommendations = Array.from(new Set(recommendations.map(movie => movie._id)))
            .map(_id => recommendations.find(movie => movie._id === _id))
            .slice(0, 30);
        //use fiter to remove watchlist movies
        return uniqueRecommendations;
    }
});

// Step 2: Generate movie recommendations based on genre, directors, and actors


app.listen(4000, function () {
    console.log("Server started on port 4000");
});
