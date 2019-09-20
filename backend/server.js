const express = require("express");
require("dotenv").config();
const server = express();
const port = 5000;
const cors = require("cors");
const database = "characterdb"
const helmet = require("helmet");
const mongoose = require("mongoose");
const characterController = require("./characterController");




// connect to database


mongoose.connect(`mongodb://localhost:27017/${database}`, { useNewUrlParser:true }, () => {
    console.log("connected to database");
})


server.use(express.json());
const corsOptions = {
    origin: '*',
    credentials: true
}

server.use(cors(corsOptions));
server.use(helmet());
server.use("/api/characters", characterController);

server.get("/", (req, res) => {
    res.send({Success: "API works..."})
})


server.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});


