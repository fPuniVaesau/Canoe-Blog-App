import { ExpressValidator, query } from "express-validator";

const NewUserSChema = {
  first_name: {
    isLength: {
      options: {
        min: 1, 
        max: 70
      }, 
      errorMessage: "First name must be at least 1 character long."
    },
    isString: {
      errorMessage: "First name must be a string."
    }
  }
}

export default NewUserSChema