const express = require("express");
const userrouter = require("./userrouter/userrouter");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.listen(PORT, () => {
  console.log(`server is running at port: ${PORT}`);
});


app.use("/api/user",userrouter);