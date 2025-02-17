import mongoose from "mongoose";

const SponsorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  logoUrl: { type: String, required: true },
  websiteUrl: { type: String, required: true },
});

export default mongoose.model("Sponsor", SponsorSchema);
