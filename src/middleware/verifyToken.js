import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const Secret_Key = process.env.JWT_SECRET;

export const verifyToken = (req, res, next) => {
  const token = req.cookies.token; // ✅ token from HTTP-only cookie
  console.log('token is :' ,token);

  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, Secret_Key); // ✅ verify token
    console.log('decoded token : ',decoded);
    req.user = decoded; // ✅ pass user info to next middleware
    next(); // ✅ continue to the route
  } catch (err) {
    return res.status(403).json({ message: 'Invalid or expired token' });
  }
};
