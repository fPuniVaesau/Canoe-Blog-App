import { ExpressValidator, query } from "express-validator";

const NewUserSChema = {
  // Validation for the first name via POST request from the user.
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
    },
    trim: true,
    notEmpty: {
      errorMessage: "First name can not be empty"
    }
  },
  // Validation for the last name via POST request from the user.
  last_name: {
    isLength: {
      options: {
        min: 1, 
        max: 70
      }, 
      errorMessage: "Last name must be at least 1 character long."
    },
    isString: {
      errorMessage: "Last name must be a string."
    },
    trim: true,
    notEmpty: {
      errorMessage: "last name can not be empty."
    }
  },
  // Validation for the email request via POST request from the user.
  email: {
    isEmail: {
      errorMessage: "This must be in email format."
    },
    normalizeEmail: true,
    trim: true,
    notEmpty:{
      errorMessage: "Email field can not be empty."
    },
    isLength: {
      options: {
        min:3, 
        max: 70
      },
      errorMessage: "Email must be min: 3 and max:70 characters long."
    }
  }

}

export default NewUserSChema