import Transport from "../models/Transport.js";

export const addTransportOption = async (req, res) => {
  const { source, destination, transportType, bookingUrl } = req.body;

  try {
    const newTransport = await Transport.create({
      userId: req.user.id,
      source,
      destination,
      transportType,
      bookingUrl,
    });

    res.status(201).json(newTransport);
  } catch (error) {
    res.status(500).json({ msg: "Server error", error });
  }
};

export const getTransportOptions = async (req, res) => {
  try {
    const transports = await Transport.find({ userId: req.user.id });
    res.json(transports);
  } catch (error) {
    res.status(500).json({ msg: "Server error", error });
  }
};
