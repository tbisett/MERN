// REQUIREMENTS FOR EXPRESS, CORS, AND RUNNING EXPRESS
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;
const PORT1 = 3000;
// var http = require('http').createServer(app);
// const STATIC_CHANNELS = ['global_notifications', 'global_chat'];

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}));

// REQUIREMENTS FOR MONGOOSE AND ROUTES
require('./config/mongoose.config');
require('./routes/colloquium.routes')(app);
// PORT CONNECTION(IF SUCCESSFUL)
const server = app.listen(PORT, () => {
    console.log(`Listening at port ${PORT}`)
})

const io = require('socket.io')(PORT1);
// (http);
// (server, { cors: true})

io.on("connection", socket => {
    console.log(socket.id);
    console.log('New Client Connected 🤝 ')

    socket.emit("chat_message", "Nice to meet everyone 😈 ")
})