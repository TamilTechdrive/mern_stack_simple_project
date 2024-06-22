const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/test2",{

});

mongoose.connection.on("connected", ()=>{
  console.log("mongodb Connected Successfully....");
})

mongoose.connection.on("error", (error)=>{
  console.error({ error: error.message });
})

module.exports = mongoose;
