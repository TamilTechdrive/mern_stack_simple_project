const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI,{

});

mongoose.connection.on("connected", ()=>{
  console.log("mongodb Connected Successfully....");
})

mongoose.connection.on("error", (error)=>{
  console.error({ error: error.message });
})

module.exports = mongoose;
