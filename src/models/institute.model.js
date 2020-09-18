const mongoose = require("mongoose");
const instituteSchema = mongoose.Schema({
  name: String,
  image: String,
  cost: String,
  location: String,
  description: String,
  latitude: String,
  longitude: String
});

module.exports = mongoose.model("institute", instituteSchema);