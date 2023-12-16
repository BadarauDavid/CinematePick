const mongoose = require(`mongoose`);
const {Schema, model} = mongoose;

const LoginSchema = new Schema({
    name: {type: String,
           required : true},
    password: {type: String,
        required : true},
    watchList:[{movieId : Schema.ObjectId} ],
    history:[{movieId : Schema.ObjectId} ]

})

const Login = model("Login", LoginSchema);
module.exports = Login;