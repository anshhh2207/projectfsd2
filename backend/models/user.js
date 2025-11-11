import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  Email: String,
  Password: String,
  role: { type: String, enum: ["admin", "user"], default: "user" },
});

const userModel = mongoose.model("user", userSchema);
export default userModel;
