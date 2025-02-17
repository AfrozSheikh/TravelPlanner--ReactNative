import axios from "axios";

export const getTouristPlaces = async (req, res) => {
  const { destination } = req.body;

  try {
    const response = await axios.post("https://api.google.com/gemini-ai", {
      prompt: `List top tourist places near ${destination}`,
      model: "gemini",
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ msg: "AI Service error", error });
  }
};
