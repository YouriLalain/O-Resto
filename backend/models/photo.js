const mongoose = require("mongoose");

const photoSchema = new mongoose.Schema({
    restaurant: { type: mongoose.Schema.Types.ObjectId, ref: "Restaurant", required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    imageUrl: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model("Photo", photoSchema);