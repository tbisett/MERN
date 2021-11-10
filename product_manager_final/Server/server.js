const express = require('express');
const app = express();
const cors = require('cors')
require('./server/config/mongoose.config'); // This is new
app.use(express.json()); // This is new
app.use(express.urlencoded({ extended: true })); // This is new
app.use(cors());
require('./server/routes/product.routes')(app); // This is new
app.listen(8000, () => {
    console.log("Listening at Port 8000")
})

