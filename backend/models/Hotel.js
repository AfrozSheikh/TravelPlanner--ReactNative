import mongoose from "mongoose";

const HotelSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  destination: { type: String, required: true },
  hotelName: { type: String, required: true },
  bookingUrl: { type: String, required: true },
});

export default mongoose.model("Hotel", HotelSchema);
