import {mongoose, Schema } from "mongoose"; 

const blogPostSchema = new Schema({
  //since the blog is being created by one user it only takes in the users ObjectId as the author.
  author: {type: Schema.Types.ObjectId, ref : "User"},
  title: {
    types: String,
  },
  content: {
    types: String
  },
}, {timestamps: true})

const BlogPost = mongoose.model("BlogPost", blogPostSchema);

export default BlogPost;