import axios from "axios";
import User from "../models/User.js";

// Helper function to get coordinates from OpenStreetMap
const getCoordinates = async (address) => {
  try {
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`;
    const response = await axios.get(url);
    if (response.data.length === 0) return null;

    const { lat, lon } = response.data[0];
    return { lat, lon };
  } catch (error) {
    console.error("Error fetching coordinates:", error);
    return null;
  }
};

// Update source & destination with coordinates
// Helper function to map lat/lon to latitude/longitude
const mapCoordinates = (coords) => ({
  latitude: parseFloat(coords.lat),
  longitude: parseFloat(coords.lon),
});

// Update source & destination with coordinates
export const updateLocation = async (req, res) => {
  try {
    const { source, destination } = req.body;
    const userId = req.user.id;

    if (!source || !destination) {
      return res.status(400).json({ msg: "Source and destination are required." });
    }

    // Fetch coordinates for source & destination
    const sourceCoords = await getCoordinates(source);
    const destCoords = await getCoordinates(destination);

    if (!sourceCoords || !destCoords) {
      return res.status(400).json({ msg: "Failed to fetch coordinates. Check the addresses." });
    }

    // Map coordinates to match schema
    const formattedSourceCoords = mapCoordinates(sourceCoords);
    const formattedDestCoords = mapCoordinates(destCoords);

    // Update user in DB
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        source,
        destination,
        sourceCoords: formattedSourceCoords,
        destinationCoords: formattedDestCoords,
      },
      { new: true }
    );

    console.log("Updated User: ", updatedUser);

    res.status(200).json({
      msg: "Location updated successfully",
      source,
      destination,
      sourceCoords: updatedUser.sourceCoords,
      destinationCoords: updatedUser.destinationCoords,
    });
  } catch (error) {
    console.error("Error updating location:", error);
    res.status(500).json({ msg: "Server error", error });
  }
};


// Swap source & destination including coordinates
export const swapLocation = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ msg: "User not found" });

    // Swap values
    const updatedUser = await User.findByIdAndUpdate(
      req.user.id,
      {
        source: user.destination,
        destination: user.source,
        sourceCoords: user.destinationCoords,
        destinationCoords: user.sourceCoords,
      },
      { new: true }
    );

    res.status(200).json({
      msg: "Locations swapped successfully",
      source: updatedUser.source,
      destination: updatedUser.destination,
      sourceCoords: updatedUser.sourceCoords,
      destinationCoords: updatedUser.destinationCoords,
    });
  } catch (error) {
    console.error("Error swapping location:", error);
    res.status(500).json({ msg: "Server error", error });
  }
};

// Get user's location
export const getUserLocation = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("source destination sourceCoords destinationCoords");
    if (!user) return res.status(404).json({ msg: "User not found" });

    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user location:", error);
    res.status(500).json({ msg: "Server error", error });
  }
};
