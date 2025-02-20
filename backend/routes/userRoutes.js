const express = require("express");
const router = express.Router();
const User = require("../models/User/user");

// Obtenir tous les utilisateurs
router.get("/", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users); // Assure-toi que c'est bien un tableau
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur" });
    }
});

// Ajouter un utilisateur
router.post("/", async (req, res) => {
    try {
        console.log("📩 Données reçues :", req.body);

        const { name, email } = req.body;
        if (!name || !email) {
            return res.status(400).json({ message: "Tous les champs sont requis." });
        }

        // Vérifier si l'email existe déjà
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Cet email est déjà utilisé." });
        }

        const user = new User({ name, email });
        await user.save();

        console.log("✅ Utilisateur ajouté :", user);
        res.status(201).json(user);
    } catch (error) {
        console.error("❌ Erreur lors de l'ajout :", error);
        res.status(500).json({ message: "Erreur serveur", error: error.message });
    }
});

module.exports = router;