import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

export const protectRoute = async (req, res, next) => {
  const token = req.cookies.jwt;
  try {
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return res.status(401).json({ message: "Unauthorized token invalid" });
    }
    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      return res.status(401).json({ message: " user not found" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log("protectRoute error");
    res.status(500).json({ message: "Internal Server Error" });
  }
};
