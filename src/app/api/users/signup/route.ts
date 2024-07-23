import {connect} from "@/dbConfig/dbConfig";
import User from "@/models/userModels";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connect()

export async function POST(request: NextRequest){
   try{
    const reqBody = await request.json()
    const {username, email, password } = reqBody
    console.log(reqBody);

    //checking is user already exists
    const user = await User.findOne({email});
    if(user){
        return NextResponse.json({error: "user already exists"}, {status:400})
    }

    //hashing password
    const salt = await bcryptjs.genSalt(10)
    const hashedPassword = await bcryptjs.hash
    (password,salt)
    
    //create new user
    const newUser = new User({
        email,
        username,
        password: hashedPassword
    })
    const savedUser = await newUser.save();
    console.log(savedUser,"savedUser");

    return NextResponse.json({
        message: "User Created Successfully",
        success: true,
        savedUser
    })

    
   }

   catch(error: any){
    return NextResponse.json(
        {error:error.message},
        {status:500}
        )

   } 
}