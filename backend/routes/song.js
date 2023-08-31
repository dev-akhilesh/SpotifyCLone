const express = require("express");
const router = express.Router();
const Song = require("../models/Song");

// Post route to create a song.
router.post(
    "/create",
    passport.authenticate("jwt", { session: false }),
    async (req, res) => {
        // req.user getss the user because of passport.authenticate
        const { name, thumbnail, track } = req.body;
        if (!name || !thumbnail || !track) {
            return res
                .status(301)
                .json({ err: "Insufficient details to create song." });
        }
        const artist = req.user._id;
        const songDetails = { name, thumbnail, track, artist };
        const createdSong = await Song.create(songDetails);
        return res.status(200).json(createdSong);
    }
);

// Get route to get all songs I have published.
router.get(
    "/get/mysongs",
    passport.authenticate("jwt", { session: false }),
    async (req, res) => {
        // We need to get all songs where artist id == currentUser._id
        const songs = await Song.find({ artist: req.user._id }).populate(
            "artist"
        );
        return res.status(200).json({ data: songs });
    }
);

module.exports = router;