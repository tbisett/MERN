// REQUIREMENTS FOR EXPRESS, CORS, AND RUNNING EXPRESS
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}));

// REQUIREMENTS FOR MONGOOSE AND ROUTES
require('./config/mongoose.config');
require('./routes/game.routes')(app);

// PORT CONNECTION(IF SUCCESSFUL)
app.listen(PORT, () => {
    console.log(`Listening at port ${PORT}`)
})