import isEmailValid from "../../helpers/email.js";
import { hashingPassword, isPasswordValid } from "../../helpers/password.js";
import Tutor from "../../models/tutor-model.js";

const tutorSignup = async (req, res) => {
  try {
    const { name, password, email, contact, image, initials } = req.body;

    if (
      [name, password, email, contact, image, initials].some(
        (item) => !item || item.trim() === ""
      )
    ) {
      return res.json({
        success: false,
        message: "Please add all the input fields",
      });
    }

    //checking if the tutor is already signed up
    const isTutor = await Tutor.findOne({ email });
    if (isTutor) {
      return res.json({
        success: false,
        message: "Tutor with the email already exist.",
      });
    }

    //working on the email
    const verifyEmail = isEmailValid(email);
    if (!verifyEmail) {
      return res.json({
        success: false,
        message: "Please add the correct email format.",
      });
    }

    //working on the password
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Password length must be greater than 8",
      });
    }

    const passwordOkay = isPasswordValid(password);
    if (!passwordOkay) {
      return res.json({
        success: false,
        message:
          "Password should contain at least an uppercase lowercase and a number",
      });
    }

    const hashPassword = await hashingPassword(password, 12);

    //creating the new tutor
    const newTutor = await Tutor({
      name,
      password: hashPassword,
      email,
      contact,
      image,
      initials,
    });

    await newTutor.save();

    res.json({
      success: true,
      message: "Tutor created success",
      data: newTutor,
    });
  } catch (error) {
    console.log(error.message);
    res.json({
      success: false,
      error: error.message,
    });
  }
};

export default tutorSignup;
