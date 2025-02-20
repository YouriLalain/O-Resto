const express = require("express");
const Menu = require("../models/menu");

const router = express.Router();

// Récupérer tous les menus d'un restaurant
router.get("/:restaurantId", async (req, res) => {
    try {
        const menus = await Menu.find({ restaurant: req.params.restaurantId });
        res.json(menus);
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur" });
    }
});

// Ajouter un menu
router.post("/", async (req, res) => {
    try {
        const { restaurant, name, items } = req.body;
        const newMenu = new Menu({ restaurant, name, items });
        await newMenu.save();
        res.status(201).json(newMenu);
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur" });
    }
});

module.exports = router;