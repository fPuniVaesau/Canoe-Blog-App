import { ExpressValidator, validationResult, body, query } from "express-validator"

const BlogPostSchema = {
  required: true
}

export default BlogPostSchema;

