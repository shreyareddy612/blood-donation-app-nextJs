import mongoose from "mongoose";

const ReceiverSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  dateOfBirth: {
    type: String,  // Change this to Date if you're handling date objects
    required: true
  },
  weight: {
    type: String,  // Change this to Number if you're handling numerical values
    required: true
  },
  bloodGroup: {
    type: String,
    required: true
  }
});

const Receiver = mongoose.models.Receiver || mongoose.model("Receiver", ReceiverSchema);

export default Receiver;
