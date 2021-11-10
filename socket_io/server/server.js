// REQUIREMENTS FOR EXPRESS, CORS, AND RUNNING EXPRESS
const express = require('express');
const app = express();
const http = require('http').Server(app);
const cors = require('cors');
const PORT = 8000;
const PORT1 = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}));

require('./config/mongoose.config');
// require('./routes/colloquium.routes')(app);

const server = app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})

const io = require('socket.io')(server, { cors: true })

io.on("connection", socket => {
    console.log(socket.id);
    console.log('New Client Connected 🤝 ')
    socket.on("eventFromClient", data => {
        socket.emit("eventToClient", data);
    })
})

http.listen( PORT1, function() {
    console.log(`Listening on front @ port ${PORT1}`)
})


