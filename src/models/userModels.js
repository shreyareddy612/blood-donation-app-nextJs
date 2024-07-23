import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    username:{
        type: String,
        required: [true, "Please provide a Username"],
        unique: true,
    },
    email:{
        type: String,
        required: [true, "Please provide an Email"],
        unique: true,
    },
    password:{
        type: String,
        required: [true, "Please provide a Password"],
    },
    isVerified:{
        type: Boolean,
        default: false
    },
    isAdmin:{
        type: Boolean,
        default: false
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: String,
    verifyToken: String,
    verifyTokenExpiry: String,

})

const User = mongoose.models.users || mongoose.model("users", userSchema);
export default User;