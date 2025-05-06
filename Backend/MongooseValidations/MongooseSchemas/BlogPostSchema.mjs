import mongoose, { Schema, Types } from "mongoose"; 

const blogPostSchema = new Schema({
  author: {
    required: true,
    Types: String
  }
  title: {
    required: true,
    Types: String
  },
  content: {
    required: true,
    Types: String
  }

}, {timestamps: true})

const BlogPost = mongoose.model("BlogPost", blogPostSchema);

export default BlogPost;