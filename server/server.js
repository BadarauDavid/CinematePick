const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrytp = require("bcrypt");

let Movie = require("./model/Movie.js");
let Login = require("./model/Login.js");

const {reader} = require("./fileReader.js");
const { name } = require("ejs");


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
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


app.post("/register",async(req,res)=>{
  const data = {
    name : req.body.name,
    password : req.body.password
  }
const existingUser = await Login.findOne({name: data.name});
if(existingUser){
  res.send("User already exist!");
}else{
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrytp.hash(data.password,saltRounds);
    data.password = hashedPassword;
    const userdata = await Login.insertMany(data);
    console.log(userdata);
    res.status(200).json({ succes: true });
  } catch (err) {
    res.status(404).json({ succes: false });
  }
}



  
})

app.post("/api/movies/addToWatchlist", (req, res) => {
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

app.get("/api/movies/getAllWatchlist", async (req, res) => {
  try {
    const allMovies = await Movie.find();
    res.json(allMovies);
  } catch (err) {
    console.error(err);
    res.status(500).send("Data could not be found");
  }
});

app.delete("/api/movies/deleteMovieById/:_id", async (req, res)=>{
        const id = req.params._id;
        try {
            await Movie.findByIdAndDelete(id);
            res.status(200).json({ succes: true });
        }catch(err){
            console.error(err); 
            res.status(500).send("Movie could not be found");
        }
    })

    app.get("/api/movies/getCarouselMovies", async (req, res) => {
      try {
        const response = await reader("movies.json");
        res.status(200).json(response);
      } catch (err) {
        console.error(err);
        res.status(500).send("Data could not be found");
      }
    });

app.listen(8000, () => console.log("Exemple app is listening on port 8000."));
