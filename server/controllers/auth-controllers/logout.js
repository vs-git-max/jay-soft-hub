const logout = async (req, res) => {
  try {
    res.clearCookie("token", {
      sameSite: "strict",
      httpOnly: process.env.NODE_ENV === "development",
      secure: process.env.NODE_ENV === "production",
    });
    res.json({ success: true, message: "Logout success" });
  } catch (error) {
    res.json({ success: false, error: error.message });
  }
};

export default logout;
