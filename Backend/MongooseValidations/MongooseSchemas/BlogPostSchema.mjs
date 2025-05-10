import mongoose, { Schema } from "mongoose"; 

const blogPostSchema = new Schema({
  author:{
    type: ObjectId,
    ref: "User"
  },
  title: {
    required: true,
    types: String
  },
  content: {
    required: true,
    types: String
  }
}, {timestamps: true})

const BlogPost = mongoose.model("BlogPost", blogPostSchema);

export default BlogPost;