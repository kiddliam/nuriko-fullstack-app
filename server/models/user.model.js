import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
      minlength: 3,
    },
    lastname: {
      type: String,
      required: true,
      minlength: 3,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamp: true }
);

const User = mongoose.model(User, userSchema);

export default User;
