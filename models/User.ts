import mongoose, { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  clerkId: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  name: String,
  createdAt: { type: Date, default: Date.now },
});

export const User = models.User || model("User", UserSchema);
