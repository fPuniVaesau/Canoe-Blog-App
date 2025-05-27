import { mongoose, Schema } from "mongoose";

const CreateBlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  summary: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String, // Store the filename or file path
    required: true,
  },
  content: {
    type: String,
    required: true,
  }
}, {timestamps: true});

module.exports = mongoose.model("Blog", CreateBlogSchema);