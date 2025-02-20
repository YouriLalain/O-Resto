const mongoose = require("mongoose");

const avisSchema = new mongoose.Schema({
    restaurant: { type: mongoose.Schema.Types.ObjectId, ref: "Restaurant", required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    rating: { type: Number, min: 1, max: 5, required: true },
    comment: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model("Avis", avisSchema);