import mongoose, { Schema } from "mongoose"; 

const blogPostSchema = new Schema({
  //since the blog is being created by one user it only takes in the users ObjectId as the author.
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