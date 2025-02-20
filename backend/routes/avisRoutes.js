const express = require("express");
const Avis = require("../models/avis");

const router = express.Router();

// Récupérer tous les avis d'un restaurant
router.get("/:restaurantId", async (req, res) => {
    try {
        const avis = await Avis.find({ restaurant: req.params.restaurantId }).populate("user", "name");
        res.json(avis);
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur" });
    }
});

// Ajouter un avis
router.post("/", async (req, res) => {
    try {
        const { restaurant, user, rating, comment } = req.body;
        const newAvis = new Avis({ restaurant, user, rating, comment });
        await newAvis.save();
        res.status(201).json(newAvis);
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur" });
    }
});

module.exports = router;