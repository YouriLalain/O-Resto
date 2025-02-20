const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("✅ MongoDB connecté"))
    .catch(err => console.error("❌ Erreur MongoDB :", err));

// Route de test
app.get("/", (req, res) => res.send("🚀 API backend en marche !"));

// Routes utilisateurs
app.use("/api/users", require("./routes/userRoutes"));

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`🚀 Serveur backend sur le port ${PORT}`));