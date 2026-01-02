import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";
import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import { User } from "next-auth";
import mongoose from "mongoose";

export async function GET(request: Request) {
  await dbConnect();
  const session = await getServerSession(authOptions);
  const user: User = session?.user as User;
  
  if (!session || !session.user) {
    return Response.json(
      { success: false, message: "Unauthorized" },
      { status: 401 }
    );
  }
  
  const userId = new mongoose.Types.ObjectId(user._id);
  
  try {
    // FIXED: Use aggregation with preserveNullAndEmptyArrays for users with no messages
    const userMessages = await UserModel.aggregate([
      { $match: { _id: userId } },
      { $unwind: { path: "$messages", preserveNullAndEmptyArrays: true } },
      { $sort: { "messages.createdAt": -1 } },
      { $group: { _id: "$_id", messages: { $push: "$messages" } } },
    ]);
    
    if (!userMessages || userMessages.length === 0) {
      return Response.json(
        { success: false, message: "User not Found" },
        { status: 404 }
      );
    }

    // Filter out null/undefined messages (when user has no messages)
    const messages = userMessages[0].messages.filter(
      (msg: any) => msg && msg._id
    );

    return Response.json(
      { success: true, messages: messages },
      { status: 200 }
    );
  } catch (error) {
    console.log("Unexpected Error occurred", error);
    return Response.json(
      { success: false, message: "Error finding User" },
      { status: 500 }
    );
  }
}