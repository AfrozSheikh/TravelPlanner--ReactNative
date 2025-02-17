import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  source: { type: String, default: null },
  destination: { type: String, default: null },
  sourceCoords: {
    latitude: { type: Number },
    longitude: { type: Number },
  },
  destinationCoords: {
    latitude: { type: Number },
    longitude: { type: Number },
  },
});

export default mongoose.model("User", UserSchema);
