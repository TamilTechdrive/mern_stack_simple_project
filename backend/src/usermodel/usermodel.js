const mongoose = require("../configuration/configuration");

const userschema = new mongoose.Schema({
    name:String,
    email:String,
    phone:String
});

const user = mongoose.model("user",userschema);

module.exports = user;