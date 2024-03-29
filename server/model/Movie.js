const mongoose = require(`mongoose`);
const {Schema, model} = mongoose;


const movieSchema = new Schema({
    name: String,
    year: Number,
    poster : String
})

const Movie = model("Movie", movieSchema);
module.exports = Movie;