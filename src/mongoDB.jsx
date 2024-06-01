import mongoose from "mongoose";

const connectDB = async () => {
  const connectionString =
    process.env.NEXT_PUBLIC_MONGODB_CONNECTION_STRING ||
    `mongodb+srv://groups-app:Accessgranted4u.@groups.zm72v29.mongodb.net/`;
  try {
    await mongoose.connect(connectionString);
    console.log("DB connected");
  } catch (e) {
    console.log(e);
  }
};

export default connectDB;
