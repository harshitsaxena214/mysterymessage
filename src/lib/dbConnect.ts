import mongoose from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

 const dbConnect = async(): Promise<void> => {
  if (connection.isConnected) {
    console.log("Already Connected to database");
    return;
  }
  try {
    const db = await mongoose.connect(process.env.MONGO_URL || "", {});
    connection.isConnected = db.connections[0].readyState;

    console.log("Db Connection Successful");
  } catch (error) {
    console.log("Database Connection Failed", error);
    process.exit(1);
  }
}
export default dbConnect;
