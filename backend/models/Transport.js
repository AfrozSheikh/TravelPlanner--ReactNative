import mongoose from "mongoose";

const TransportSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  source: { type: String, required: true },
  destination: { type: String, required: true },
  transportType: { type: String, required: true }, // Bus, Train, Flight
  bookingUrl: { type: String, required: true }, // Redirect URL
});

export default mongoose.model("Transport", TransportSchema);
