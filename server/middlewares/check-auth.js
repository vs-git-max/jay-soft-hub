import jwt from "jsonwebtoken";
import User from "../models/user-model.js";

const checkAuth = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.json({ success: false, message: "No token found" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    const user = User.findById(decoded.userId);

    if (!user) return res.json({ success: false, message: "Unauthorized" });

    req.user = user;

    next();
  } catch (error) {
    res.json({ success: false, error: error.message });
  }
};

export default checkAuth;
