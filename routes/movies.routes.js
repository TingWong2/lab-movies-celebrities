const router = require("express").Router();
const async = require('hbs/lib/async');
const movieModel = require("../models/movie.model")


//Iteration #6: Adding New Movies
// GET - create one movie (form)
router.get ("/movies-create", (req, res, next) => { 
    res.render("movies/new-movie.hbs");
});

//  POST - create movie
router.post("/movies-create", async (req, res, next) => {
    const newMovie= {...req.body};
    try {
        await movieModel.create(newMovie);
        res.redirect("/movies");
      } catch (err) {
        res.render("movies/new-movie.hbs");
      }
  //console.log("movie create", req.body)
}); 










module.exports = router;