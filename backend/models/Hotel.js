// backend/models/Hotel.js
import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  destinationId: { type: mongoose.Schema.Types.ObjectId, ref: "Destination", required: true },
  description: { type: String },
  image: { type: String }
});

const Hotel = mongoose.model("Hotel", hotelSchema);
export default Hotel;
