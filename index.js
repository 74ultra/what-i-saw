require('dotenv').config();
const express = require('express');
const cors = require('cors')

const server = express()
server.use(cors());
server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json({
        message: "Heres 'What I Saw'"
    })
})

const port = process.env.PORT || 5000;


// server.listen(port, () => console.log(`Server listening on port ${port}`))

if (!module.parent) {
    server.listen(port, () => console.log(`Server listening on port ${port}`))
}

module.exports = server