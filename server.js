const express = require('express');
const cors = require('cors');

const postRouter = require('./posts/posts-router.js');

const server = express();

server.use(express.json());
server.use(cors())

server.get('/', (req, res) => {
  res.send(`
    Hello
  `);
});

server.use('/api/posts', postRouter);

// add an endpoint that returns all the messages for a hub
// add an endpoint for adding new message to a hub

//export default server
module.exports = server;