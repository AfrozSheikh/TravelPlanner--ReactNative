import Travel from "../models/Travel.js";

export const addTravelEntry = async (req, res) => {
  const { source, destination } = req.body;

  try {
    const newTravel = await Travel.create({ userId: req.user.id, source, destination });
    res.status(201).json(newTravel);
  } catch (error) {
    res.status(500).json({ msg: "Server error", error });
  }
};
