import mongoose from "mongoose";

const connectDB = async () => {
  const connectionString =
    process.env.NEXT_PUBLIC_MONGODB_CONNECTION_STRING || ``;
  try {
    await mongoose.connect(connectionString);
    console.log("DB connected");
  } catch (e) {
    console.log(e);
  }
};

export default connectDB;
