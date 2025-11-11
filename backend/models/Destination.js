import mongoose from "mongoose";

const destinationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  image: { type: String }
});

const Destination = mongoose.model("Destination", destinationSchema);
export default Destination;
