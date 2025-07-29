// authCOntrollers.js 
import jwt from "jsonwebtoken";

// Token verify karega (React context use karega isko)
export const checkAuth = (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(200).json({ success: false, message: "Not authenticated" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return res.status(200).json({ success: true, user: decoded ,isAuth : true});
  } catch (err) {
    return res.status(401).json({ success: false, message: "Invalid token" });
  }
};


// POST /api/users/logout
export const logout = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict"
  });
  res.status(200).json({success: true , message: "Logout successful" });
};