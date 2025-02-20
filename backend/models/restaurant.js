const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    location: {
        type: { type: String, default: "Point" },
        coordinates: { type: [Number], required: true } // [longitude, latitude]
    },
    menus: [{ type: mongoose.Schema.Types.ObjectId, ref: "Menu" }], // Menus du restaurant
    photos: [{ type: mongoose.Schema.Types.ObjectId, ref: "Photo" }], // Photos ajoutées par les utilisateurs
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" } // Propriétaire du restaurant
});

restaurantSchema.index({ location: "2dsphere" }); // Index pour la recherche géographique

module.exports = mongoose.model("Restaurant", restaurantSchema);