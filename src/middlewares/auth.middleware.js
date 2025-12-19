import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js"; // 👈 MUST MATCH FILE NAME
import {apiError} from "../utils/apiError.js";

export const verifyJWT = async (req, res, next) => {
  try {
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      return next(new apiError(401, "Unauthorized request"));
    }

    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    const user = await User.findById(decoded._id).select(
      "-password -refreshToken"
    );

    if (!user) {
      return next(new apiError(401, "Invalid access token"));
    }

    req.user = user; // 🔥 REQUIRED FOR LOGOUT
    next();
  } catch (error) {
    next(new apiError(401, "Invalid or expired token"));
  }
};
