import { confirmPassword } from "../../helpers/password.js";
import User from "../../models/user-model.js";
import jwt from "jsonwebtoken";

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if ([email, password].some((item) => !item || item.trim().length === 0))
      return res.json({
        success: false,
        message: "Please add all input fields",
      });

    //finding the user
    const user = await User.findOne({ email });
    if (!user)
      return res.json({
        success: false,
        message: "User with the email not found",
      });

    //check the password
    const verifyPassword = await confirmPassword(user?.password, password);
    if (!verifyPassword)
      return res.json({ success: false, message: "Incorrect password input." });

    //generate the token
    const token = jwt.sign(
      { id: user?._id, email: user?.email },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1m" }
    );

    //setting the cookie
    res.cookie("token", token, {
      maxAge: 1 * 60 * 1000,
      sameSite: "strict",
      httpOnly: process.env.NODE_ENV === "development",
      secure: process.env.NODE_ENV === "production",
    });

    res.json({
      message: "User login success",
      success: true,
      data: {
        user,
        token,
      },
    });
  } catch (error) {
    console.log(`Error in the login controller: ${error.message}`);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export default login;
