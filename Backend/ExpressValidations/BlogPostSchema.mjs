import { ExpressValidator, validationResult, body, query } from "express-validator"

const BlogPostSchema = {
  title: {
    isLength:{
      options: {
        min: 3, 
        max: 70
      },
      errorMessage: "the title must be between a min: 3 and max:70 characters long."
    },
    required: true,
    notEmpty: {
      errorMessage: "the title field can not be empty."
    },
    isString: {
      errorMessage: "title must be a string"
    }

  }
  
  
}

export default BlogPostSchema;

