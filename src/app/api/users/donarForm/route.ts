import { connect } from "@/dbConfig/dbConfig";
import Donar from "@/models/donarModel";  // Make sure you have a corresponding model
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { name, phoneNumber, email, dateOfBirth, weight, bloodGroup, address } = reqBody;
    console.log(reqBody);

    // Checking if donar already exists
    const donar = await Donar.findOne({ email });
    if (donar) {
      return NextResponse.json({ error: "Donar already exists" }, { status: 400 });
    }

    // Create new donar
    const newDonar = new Donar({
      name,
      phoneNumber,
      email,
      dateOfBirth,
      weight,
      bloodGroup,
      address
    });
    const savedDonar = await newDonar.save();
    console.log(savedDonar, "savedDonar");

    return NextResponse.json({
      message: "Donar Created Successfully",
      success: true,
      savedDonar
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
      // Fetch all donars from the database
      const donars = await Donar.find({});
      return NextResponse.json(donars);
    } catch (error: any) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }
  }
