const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const router = express.Router();

// Inscription
router.post("/register", async (req, res) => {
    try {
        console.log("📩 Requête reçue :", req.body); // LOG pour voir les données reçues

        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            console.log("⚠️ Champs manquants !");
            return res.status(400).json({ message: "Tous les champs sont requis." });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            console.log("⚠️ Email déjà utilisé !");
            return res.status(400).json({ message: "Cet email est déjà utilisé." });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();

        console.log("✅ Utilisateur créé :", newUser);
        res.status(201).json({ message: "Utilisateur créé avec succès !" });
    } catch (error) {
        console.error("❌ Erreur lors de l'inscription :", error);
        res.status(500).json({ message: "Erreur serveur", error: error.message });
    }
});

// Connexion
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "Utilisateur non trouvé." });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Mot de passe incorrect." });

        const token = jwt.sign({ id: user._id }, "SECRET_KEY", { expiresIn: "1h" });
        res.json({ token, user });
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur" });
    }
});

// Récupérer les infos utilisateur
router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select("-password");
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur" });
    }
});

module.exports = router;