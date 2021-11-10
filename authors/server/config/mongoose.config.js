// REQUIREMENT FOR MONGOOSE, AND PUTTING DB IN A VAR(FOR EASY CHANGING(IF NEEDED))
const mongoose = require('mongoose');
// DB SHOULD BE CHANGES TO AUTHORS INSTEAD OF PRODUCTS
const DB = 'products'; 

// MONGOOSE CONNECTION(useNewUrlParser AND useUnifiedTopology ARE NOW DEPRECATED, BUT STILL OK TO USE FOR NOW), THEN AND CATCH FOR DB CONNECTION
mongoose.connect("mongodb://localhost/" + DB, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
})
    .then(() => console.log(`Established a connection to the ${DB} database`))
    .catch(err => console.log(`Something went wrong when connecting to the ${DB} database`, err));

