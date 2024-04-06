import mongoose, { Mongoose } from "mongoose";

interface IUser {
  email: string;
  password: string;
}

interface UserModel extends mongoose.Model<any> {
  build(attrs: IUser): any;
}

interface UserDoc extends mongoose.Document {
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
