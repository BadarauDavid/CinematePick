const mongoose = require(`mongoose`);
const {Schema, model} = mongoose;

const LoginSchema = new Schema({
    name: {type: String,
           required : true},
    password: {type: String,
        required : true}

})

const Login = model("Login", LoginSchema);
module.exports = Login;