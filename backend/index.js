const express = require('express');
const mongoose = require('mongoose');
const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const passport = require("passport");
const User = require("./models/User");
const authRoutes = require("./routes/auth");
const songRoutes = require("./routes/song");
const playlistRoutes = require("./routes/playlist");

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


// setup passport-jwt
let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRET_KEY_PASSPORT;

passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
    User.findOne({ id: jwt_payload.sub }, function (err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));



app.get('/', (req, res) => {
    res.send("Hello, world!");
})

app.use("/auth", authRoutes);
app.use("/song", songRoutes);
app.use("/playlist", playlistRoutes);


app.listen(port, () => {
    console.log("App listening on port " + port)
})