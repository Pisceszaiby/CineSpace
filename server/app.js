//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const cors = require("cors")
const mongoose = require('mongoose');

const app = express();

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

///////////////////////////////////Requests Targetting all Articles////////////////////////

app.route("/movies")
    .get(async function (req, res) {
        try {
            const foundMovies = await Movie.find();
            res.send(foundMovies);
        } catch (err) {
            res.send(err);
        }
    })


app.put('/movies/:name', async (req, res, next) => {
    try {
        const updatedMovie = await Movie.findOneAndUpdate({ name: req.params.name }, { watchlist: req.body.watchlist }, { new: true });
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




// app.get("/movies/allWatch", async function (req, res, next) {
//     try {
//         const updatedMovie = await Movie.updateMany({}, { $set: { watch: true } }, { new: true });

//     } catch (error) {
//         console.error(error);
//         next(error);
//     }
// });


app.listen(4000, function () {
    console.log("Server started on port 4000");
});
