// REQUIREMENTS FOR EXPRESS, CORS, AND RUNNING EXPRESS
const express = require('express');
const app = express();
const cors = require('cors')
const PORT = 8000;

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// REQUIREMENTS FOR MONGOOSE AND ROUTES
require('./server/config/mongoose.config');
require('./server/routes/author.routes')(app); // This is new

// PORT CONNECTION(IF SUCCESSFUL)
app.listen(PORT, () => {
    console.log(`Listening at Port ${PORT}`)
})


