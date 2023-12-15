const mongoose = require(`mongoose`);
const {Schema, model} = mongoose;

const LoginSchema = new Schema({
    name: {type: String,
           required : true},
    password: {type: String,
        required : true},
    movies:[{movieId : Schema.ObjectId , movieStatus : String}]
})

const Login = model("Login", LoginSchema);
module.exports = Login;