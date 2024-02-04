import mongoose, { Mongoose } from "mongoose";

interface IUser {
  email: string;
  password: string;
}

const userSchema = new mongoose.Schema<IUser>({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model<IUser>("User", userSchema);

export { User, IUser };
