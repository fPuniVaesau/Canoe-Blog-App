import mongoose, { Schema } from "mongoose"; 

const blogPostSchema = new Schema({
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