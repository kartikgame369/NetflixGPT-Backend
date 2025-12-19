import { ApiError } from "../utils/apiError.js";
import { asyncHandler } from "../utils/asyncHandeler.js";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

export const verifyJWT = asyncHandler(async (req, res, next) => {
  // 1️⃣ Get token
  const token =
    req.cookies?.accessToken ||
    req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    throw new ApiError(401, "Unauthorized request");
  }

  // 2️⃣ Verify token
  const decodedToken = jwt.verify(
    token,
    process.env.ACCESS_TOKEN_SECRET
  );

  // 3️⃣ Find user
  const user = await User.findById(decodedToken._id).select(
    "-password -refreshToken"
  );

  if (!user) {
    throw new ApiError(401, "Unauthorized request, user not found");
  }

  // 4️⃣ Attach user
  req.user = user;

  // ✅ VERY IMPORTANT
  next();
});
