// mongodb.js
const mongoose = require('mongoose');

// MongoDB connection string
const url = 'mongodb+srv://shubhambharadwaj2909:Mishra%40123@assetmanagement.zb0lvdo.mongodb.net/feedback';

// Connect to MongoDB

mongoose.connect(url)
.then(()=>{
    console.log("Connection successful")
})
.catch((err)=>{
    console.log("Connection Failed",err)
})

// Define Feedback Schema
const feedbackSchema = new mongoose.Schema({
  email: { type: String, required: true },
  assetName: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  feedbackType: { type: String, required: true },
  feedbackDetails: { type: String, required: true }
});

// Create Feedback Model
const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback;
