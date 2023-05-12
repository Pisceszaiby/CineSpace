//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const cors = require("cors")
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

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


//   .post(function (req, res) {

//     const newArticle = new Article({
//       title: req.body.title,
//       content: req.body.content
//     });

//     newArticle.save(function (err) {
//       if (!err) {
//         res.send("Successfully added a new article.");
//       } else {
//         res.send(err);
//       }
//     });
//   })

//   .delete(function (req, res) {

//     Article.deleteMany(function (err) {
//       if (!err) {
//         res.send("Successfully deleted all articles.");
//       } else {
//         res.send(err);
//       }
//     });
//   });

// ////////////////////////////////Requests Targetting A Specific Article////////////////////////

// app.route("/articles/:articleTitle")

//   .get(function (req, res) {

//     Article.findOne({ title: req.params.articleTitle }, function (err, foundArticle) {
//       if (foundArticle) {
//         res.send(foundArticle);
//       } else {
//         res.send("No articles matching that title was found.");
//       }
//     });
//   })

//   .put(function (req, res) {

//     Article.update(
//       { title: req.params.articleTitle },
//       { title: req.body.title, content: req.body.content },
//       { overwrite: true },
//       function (err) {
//         if (!err) {
//           res.send("Successfully updated the selected article.");
//         }
//       }
//     );
//   })

//   .patch(function (req, res) {

//     Article.update(
//       { title: req.params.articleTitle },
//       { $set: req.body },
//       function (err) {
//         if (!err) {
//           res.send("Successfully updated article.");
//         } else {
//           res.send(err);
//         }
//       }
//     );
//   })

//   .delete(function (req, res) {

//     Article.deleteOne(
//       { title: req.params.articleTitle },
//       function (err) {
//         if (!err) {
//           res.send("Successfully deleted the corresponding article.");
//         } else {
//           res.send(err);
//         }
//       }
//     );
//   });



app.listen(4000, function () {
    console.log("Server started on port 4000");
});
