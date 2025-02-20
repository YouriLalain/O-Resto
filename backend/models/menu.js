const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
    restaurant: { type: mongoose.Schema.Types.ObjectId, ref: "Restaurant", required: true },
    name: { type: String, required: true },
    items: [{
        name: { type: String, required: true },
        description: String,
        price: { type: Number, required: true }
    }]
});

module.exports = mongoose.model("Menu", menuSchema);