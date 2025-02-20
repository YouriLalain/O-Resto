const express = require("express");
const Photo = require("../models/photo");

const router = express.Router();

// Récupérer toutes les photos d'un restaurant
router.get("/:restaurantId", async (req, res) => {
    try {
        const photos = await Photo.find({ restaurant: req.params.restaurantId });
        res.json(photos);
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur" });
    }
});

// Ajouter une photo
router.post("/", async (req, res) => {
    try {
        const { restaurant, user, imageUrl } = req.body;
        const newPhoto = new Photo({ restaurant, user, imageUrl });
        await newPhoto.save();
        res.status(201).json(newPhoto);
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur" });
    }
});

module.exports = router;