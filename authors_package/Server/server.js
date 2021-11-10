const express = require('express');
const app = express();
const cors = require('cors')
const PORT = 8000;

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// require mongoose and routes
require('./server/config/mongoose.config');
require('./server/routes/author.routes')(app); // This is new
app.listen(PORT, () => {
    console.log(`Listening at Port ${PORT}`)
})


