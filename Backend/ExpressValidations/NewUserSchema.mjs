import { ExpressValidator, query } from "express-validator";

const NewUserSChema = {
  // Validation for the first name via POST request from the user.
  firstname: {
    isLength: {
      options: {
        min: 1,
        max: 70,
      },
      errorMessage: "First name must be at least 1 character long.",
    },
    isString: {
      errorMessage: "First name must be a string.",
    },
    trim: true,
    notEmpty: {
      errorMessage: "First name can not be empty",
    },
  },
  // Validation for the last name via POST request from the user.
  lastname: {
    isLength: {
      options: {
        min: 1,
        max: 70,
      },
      errorMessage: "Last name must be at least 1 character long.",
    },
    isString: {
      errorMessage: "Last name must be a string.",
    },
    trim: true,
    notEmpty: {
      errorMessage: "last name can not be empty.",
    },
  },
  // Validation for the email request via POST request from the user.
  email: {
    isEmail: {
      errorMessage: "This must be in email format.",
    },
    normalizeEmail: true,
    trim: true,
    notEmpty: {
      errorMessage: "Email field can not be empty.",
    },
    isLength: {
      options: {
        min: 3,
        max: 70,
      },
      errorMessage: "Email must be min: 3 and max:70 characters long.",
    },
  },
  // validation for the password field via POST request from user.
  password: {
    isLength: {
      options: {
        min: 7,
        max: 70,
      },
      errorMessage: "Passwords must be min: 7 and max: 70 characters.",
    },
    notEmpty: {
      errorMessage: "Passwords can not be empty.",
    },
  },
  // validation to confirm if the password is correct before submitting.
  confirm_password: {
    notEmpty: {
      errorMessage: "Please re-enter password.",
    },
  },
  // validation to confirm if the username is correct and unique before submitting.
  username: {
    unique: true,
    notEmpty: {
      errorMessage: "Username can not be empty."
    },
    isLength: {
      options:{
        min: 3,
        max: 70
      },
      errorMessage: "Username must be a min: 3 and max: 70 characters."
    },
    trim: true,
    isString: {
      errorMessage: "Username must be a string."
    }
  }
};

export default NewUserSChema;
