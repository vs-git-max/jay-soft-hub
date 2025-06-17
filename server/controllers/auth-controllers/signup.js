import isEmailValid from "../../helpers/email.js";
import { hashingPassword, isPasswordValid } from "../../helpers/password.js";
import User from "../../models/user-model.js";

const signup = async (req, res) => {
  try {
    const { name, password, email } = req.body;

    //checking if all the fields are added
    if ([name, password, email].some((item) => !item || item.trim() === "")) {
      return res.json({
        success: false,
        message: "Please include all the fields",
      });
    }

    //working on the name
    const splitName = name.trim().split(" ");
    if (splitName.length === 1) {
      return res.json({ success: false, message: "Add at least two names." });
    }

    //working on the email
    const validEmail = isEmailValid(email);
    if (!validEmail)
      return res.json({
        success: false,
        message: "Add the correct email structure",
      });

    //checking if the email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({
        success: false,
        message:
          "User with the such details already exist. Consider logging in instead",
      });
    }

    //working on the password
    if (password.length < 6)
      return res.json({
        success: false,
        message: "Password length should be greater than 6",
      });

    const standardPassword = isPasswordValid(password);
    if (!standardPassword)
      return res.json({
        success: false,
        message: "Password should contain uppercase,lowercase and a number.",
      });

    const hashPassword = await hashingPassword(password);

    //creating the new user
    const newUser = await User({
      name,
      email,
      password: hashPassword,
    });

    await newUser.save();

    res.json({
      success: true,
      message: "User created a success",
      data: newUser,
    });
  } catch (error) {
    console.log(`Error in the signup controller, ${error.message}`);
    res.json({
      success: false,
      error: error.message,
    });
  }
};

export default signup;
