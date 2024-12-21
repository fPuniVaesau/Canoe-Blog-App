import { ExpressValidator, validationResult, body, query } from "express-validator"

const BlogPostSchema = {
  // validation for title field that is sent via POST request from the user.
  title: {
    isLength:{
      options: {
        min: 3, 
        max: 70
      },
      errorMessage: "The title must be between a min: 3 and max:70 characters long."
    },
    notEmpty: {
      errorMessage: "The title field can not be empty."
    },
    isString: {
      errorMessage: "The title must be a string"
    },
    trim: true
  },
  // validation for the content field that is sent via POST request from the user.
  content: {
    notEmpty: {
      errorMessage: "The contents of the blog can not be empty."
    },
    isString:{
      errorMessage: "The content must be in stirng format to submit the blog."
    },
    isLength: {
      options: {
        min: 3
      },
      errorMessage: "Content is not long enough, it must be a minimim of 3 characters long."
    },
    trim: true
  },
  // validation for the author field that is sent via POST request from the user.
  author: {
    notEmpty: {
      errorMessage: "Author field can not be empty"
    },
    isLength: {
      options: {
        min: 3, 
        max: 70
      }, 
      errorMessage: "This field must be between min: 3 and max: 70 characters long."
    },
    trim: true
  }
}

export default BlogPostSchema;

