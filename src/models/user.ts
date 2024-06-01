import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
});

const user = mongoose.models.user || mongoose.model("user", userSchema);

export default user;
