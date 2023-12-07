const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

let Movie = require("./model/Movie.js");

const app = express();
app.use(express.json());
app.use(cors());

app.use(function (req, res, next) {
  res.header("Acces-Control-Allow-Origin", "*");
  res.header(
    "Acces-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(express.urlencoded({ extended: false }));

mongoose.connect(`mongodb://127.0.0.1:27017/CinematePick`);

app.get("/", (req, res) => {
  res.send("Succesful response.");
});

app.post("/api/movies/addToFav", (req, res) => {
  const name = req.body.name;
  const year = req.body.year;
  const status = req.body.status;

  const movie = new Movie({
    name,
    year,
    status,
  });

  try {
    movie.save();
    res.status(200).json({ succes: true });
  } catch (err) {
    res.status(404).json({ succes: false });
  }
});

app.get("/api/movies/getAll", async (req, res) => {
  try {
    const allMovies = await Movie.find();
    res.json(allMovies);
  } catch (err) {
    console.error(err);
  }
});

app.delete("/api/movies/deleteById/:_id", async (req, res)=>{
        const id = req.params._id;
        try {
            await Movie.findByIdAndDelete(id);
            res.status(200).json({ succes: true });
        }catch(err){
            console.error(err); 
        }
    })

app.listen(8000, () => console.log("Exemple app is listening on port 8000."));
