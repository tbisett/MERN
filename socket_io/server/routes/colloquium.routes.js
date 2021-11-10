// REQUIREMENT FOR MONGOOSE, AND PUTTING DB IN A VAR(FOR EASY CHANGING(IF NEEDED))
const mongoose = require('mongoose');
const DB = 'colloquium_project';

// MONGOOSE CONNECTION
mongoose.connect("mongodb://localhost/" + DB)
    .then( () => console.log(`Established a connection to the ${DB} database`))
    .catch( () => console.log(`Failed to establish a connection to the ${DB} database`, err));