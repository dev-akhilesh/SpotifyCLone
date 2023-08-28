const express = require('express');
const mongoose = require('mongoose');

require("dotenv").config();
const cors = require("cors");
const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());


// connect mongodb to our node app
mongoose
    .connect(
        "mongodb+srv://akhileshtakawale703:" +
        process.env.MONGO_PASSWORD +
        "@cluster0.47wrssa.mongodb.net/Spotify_DB?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    ).then((x) => {
        console.log("connected to mongoDB")
    })
    .catch((err) => {
        console.log("Error while connecting to mongoDB")
    });


app.get('/', (req, res) => {
    res.send("Hello, world!");
})


app.listen(port, () => {
    console.log("App listening on port " + port)
})