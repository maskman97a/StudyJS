const express = require('express');
const imageRouter = express.Router();

const imageModel = require('../models/imageModel');

imageRouter.use((req, res, next) => {
    console.log("image middleware");
    next();
});

imageRouter.get("/", (req, res) => {
    console.log("Get all image");
    imageModel.find({})
        .populate("user")
        .exec((err, imageFound) => {
            if (err) res.status(500).json({ success: 0, error: err })
            else res.json({ success: 1, imageFound });
        });
});

imageRouter.get("/:id", (req, res) => {
    let imageId = req.params.id;
    console.log("Get all image");
    imageModel.findById(imageId, (err, imageFound) => {
        if (err) res.status(500).json({ success: 0, error: err })
        else if (!imageFound._id) res.status(400).json({ success: 0, message: "not found" })
        else res.json({ success: 1, image: imageFound });
    });
});

imageRouter.post('/', (req, res) => {
    const { user, date, url, caption, title } = req.body;
    imageModel.create({ user, view, like, date, url, caption, title }, (err, imageCreated) => {
        if (err) res.status(500).json({ success: 0, message: error })
        else res.status(201).json({ susccess: 1, image: imageCreated });
    });
});

//edit image
imageRouter.put('/:id', (req, res) => {
    const imageId = req.params.id;
    const { url, caption, title } = req.body;

    // imageModel.findByIdAndUpdate(imageId, { name, password, avatar, intro }, { new: true }, (err, imageUpdated) => {
    //     if(err) res.status(500).json({ success: 0, message: err })
    //     else res.json({ success: 1, image: imageUpdated });
    // })
    imageModel.findById(imageId, (err, imageFound) => {
        if (err) res.status(500).json({ success: 0, message: err })
        else if (!imageFound._id) res.status(404).json({ success: 0, message: "not found!" })
        else {
            imageFound.url = url || imageFound.url;
            imageFound.caption = caption || imageFound.caption;
            imageFound.title = title || imageFound.title;
            imageFound.save((err, imageUpdated) => {
                if (err) res.status(500).json({ success: 0, message: err })
                else res.json({ success: 1, image: imageUpdated });
            })
        };
    })
})

imageRouter.delete('/:id', (req, res) => {
    var imageId = req.params.id;
    imageModel.remove({ _id: imageId }, (err) => {
        if (err) res.status(500).json({ success: 0, message: err })
        else res.json({ success: 1 });
    })
});

module.exports = imageRouter;