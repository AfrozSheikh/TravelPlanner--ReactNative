import mongoose from "mongoose";

const TravelSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  source: { type: String, required: true },
  destination: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Travel", TravelSchema);
