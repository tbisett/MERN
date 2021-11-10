const express = require("express");
const app = express();
const mongoose = require("mongoose");

require("./server/config/jokes.config.js");


app.use(express.json(), express.urlencoded({extended: true}));

const AllMyJokeRoutes = require("./server/routes/jokes.routes.js");
AllMyJokeRoutes(app);

app.listen(8000, () => console.log("The Server is all fired up on port 8000"));