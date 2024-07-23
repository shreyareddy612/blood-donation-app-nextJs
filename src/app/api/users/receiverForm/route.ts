import { connect } from "@/dbConfig/dbConfig";
import Receiver from "@/models/receiverModel";  // Make sure you have a corresponding model
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { name, phoneNumber, email, dateOfBirth, weight, bloodGroup } = reqBody;
    console.log(reqBody);

    // Checking if receiver already exists
    const receiver = await Receiver.findOne({ email });
    if (receiver) {
      return NextResponse.json({ error: "Receiver already exists" }, { status: 400 });
    }

    // Create new receiver
    const newReceiver = new Receiver({
      name,
      phoneNumber,
      email,
      dateOfBirth,
      weight,
      bloodGroup
    });
    const savedReceiver = await newReceiver.save();
    console.log(savedReceiver, "savedReceiver");

    return NextResponse.json({
      message: "Receiver Created Successfully",
      success: true,
      savedReceiver
    });

  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }


  
}

export async function GET(request: NextRequest) {
    try {
      // Fetch all receivers from the database
      const receivers = await Receiver.find({});
      return NextResponse.json(receivers);
    } catch (error: any) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }
  }
