import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";

export async function POST(request: Request) {
  await dbConnect();
  
  try {
    const { username, code } = await request.json();
    
    if (!username || !code) {
      return Response.json(
        {
          success: false,
          message: "Username and code are required",
        },
        {
          status: 400,
        }
      );
    }

    const decodedUsername = decodeURIComponent(username);
    
    console.log("Looking for user:", decodedUsername);
    console.log("With code:", code);

    // Find user with case-insensitive search
    const user = await UserModel.findOne({ 
      username: { $regex: new RegExp(`^${decodedUsername}$`, 'i') }
    });

    if (!user) {
      console.log("User not found in database");
      return Response.json(
        {
          success: false,
          message: "User not found",
        },
        {
          status: 404,
        }
      );
    }

    console.log("User found:", user.username);
    console.log("Stored code:", user.verifyCode);
    console.log("Code expiry:", user.verifyCodeExpiry);

    const isCodeValid = String(user.verifyCode) === String(code);
    const isCodeNotExpired = new Date(user.verifyCodeExpiry) > new Date();

    if (isCodeValid && isCodeNotExpired) {
      user.isVerified = true;
      await user.save();
      return Response.json(
        {
          success: true,
          message: "Account verified successfully",
        },
        {
          status: 200,
        }
      );
    } else if (!isCodeNotExpired) {
      return Response.json(
        {
          success: false,
          message: "Verification code has expired. Please sign up again to get a new code.",
        },
        {
          status: 400,
        }
      );
    } else {
      return Response.json(
        {
          success: false,
          message: "Incorrect verification code",
        },
        {
          status: 400,
        }
      );
    }
  } catch (error) {
    console.error("Error verifying user:", error);
    return Response.json(
      {
        success: false,
        message: "Error verifying user",
      },
      {
        status: 500,
      }
    );
  }
}