import Hotel from "../models/Hotel.js";

export const addHotel = async (req, res) => {
  const { destination, hotelName, bookingUrl } = req.body;

  try {
    const newHotel = await Hotel.create({ userId: req.user.id, destination, hotelName, bookingUrl });
    res.status(201).json(newHotel);
  } catch (error) {
    res.status(500).json({ msg: "Server error", error });
  }
};

export const getHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find({ userId: req.user.id });
    res.json(hotels);
  } catch (error) {
    res.status(500).json({ msg: "Server error", error });
  }
};
