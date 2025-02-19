import User from "../models/User.js";

export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id)
    console.log(user);
    
    res.json(user);
  } catch (error) {
    res.status(500).json({ msg: "Server error", error });
  }
};
