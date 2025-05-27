import { mongoose, Schema } from "mongoose";

const CreateBlogSchema = new Schema({
  title: {
    type: String,
    trim: true,
  },
  summary: {
    type: String,
    trim: true,
  },
  image: {
    type: String, // Store the filename or file path
  },
  content: {
    type: String,
  }
}, {timestamps: true});

const CreateBlog = mongoose.model("Blog", CreateBlogSchema);

export default CreateBlog