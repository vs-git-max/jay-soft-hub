import bcrypt from "bcryptjs";

export const isPasswordValid = (password) => {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/.test(password);
};

export const hashingPassword = async (password, salt = 10) => {
  const salted = await bcrypt.genSalt(salt);
  return await bcrypt.hash(password, salted);
};

export const confirmPassword = async (currentPassword, inputPassword) => {
  return await bcrypt.compare(inputPassword, currentPassword);
};
