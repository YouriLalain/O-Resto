const express = require("express");
const Restaurant = require("../models/restaurant");

const router = express.Router();

// Récupérer tous les restaurants
router.get("/", async (req, res) => {
    try {
        const restaurants = await Restaurant.find();
        res.json(restaurants);
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur" });
    }
});

// Ajouter un restaurant
router.post("/", async (req, res) => {
    try {
        const { name, address, coordinates, owner } = req.body;
        const newRestaurant = new Restaurant({
            name,
            address,
            location: { type: "Point", coordinates },
            owner
        });
        await newRestaurant.save();
        res.status(201).json(newRestaurant);
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur" });
    }
});

// Modifier un restaurant
router.put("/:id", async (req, res) => {
    try {
        const restaurant = await Restaurant.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(restaurant);
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur" });
    }
});

// Supprimer un restaurant
router.delete("/:id", async (req, res) => {
    try {
        await Restaurant.findByIdAndDelete(req.params.id);
        res.json({ message: "Restaurant supprimé !" });
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur" });
    }
});

module.exports = router;