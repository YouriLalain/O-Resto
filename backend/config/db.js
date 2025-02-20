const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config(); // Charge les variables d'environnement

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("✅ Connecté à MongoDB");
    } catch (error) {
        console.error("❌ Erreur MongoDB :", error.message);
        process.exit(1);
    }
};

module.exports = connectDB;