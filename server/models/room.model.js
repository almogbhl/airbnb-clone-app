const mongoose    = require('mongoose');

const RoomSchema = mongoose.Schema({
  city: { type: String, require: true },
  country: { type: String, require: true },
  price: { type: Number, require: true },
  superhost: { type: Boolean, require: true },
  beds: { type: Number, require: true },
  images: { type: Array, require: true },
  bathrooms: { type: Number, require: true },
  guests: { type: Number, require: true },
  rating_stars: { type: Number, require: true },
  rating_total: { type: Number, require: true },
  rating_acurrancy: { type: Number, require: true },
  rating_communication: { type: Number, require: true },
  rating_cleanliness: { type: Number, require: true },
  rating_location: { type: Number, require: true },
  rating_check_in: { type: Number, require: true },
  rating_value: { type: Number, require: true },
  lon: { type: Number, require: false },
  lnt: { type: Number, require: false },
  cancellation: { type: Boolean, require: true },
  dates: { type: String, require: false },
  host_first_name: { type: String, require: true },
  host_last_name: { type: String, require: true },
  street: { type: String, require: true },
  about_host: { type: String, require: true, min: 5 }
});

module.exports = mongoose.model("rooms", RoomSchema);
