// REQUIREMENTS FOR EXPRESS, CORS, AND RUNNING EXPRESS
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;
const PORT1 = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}));

require('./config/mongoose.config');
require('./routes/colloquium.routes')(app);

const server = app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})

const io = require('socket.io')(PORT1);

io.on("connection", socket => {
    console.log(socket.id);
    console.log('New Client Connected 🤝 ')

    socket.emit("chat_message", "Nice to meet everyone 😈 ")
})