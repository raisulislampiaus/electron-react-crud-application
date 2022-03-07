const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  text: {
    type: String,
    trim: true,
    required: [true, "Item text is required"],
  },
  category: {
    type: String,
    default: "Low",
    enum: ["Low", "Moderate", "High", "Admin"],
  },
  user: {
    type: String,
    trim: true,
    required: [true, "User is required"],
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Item", ItemSchema);
