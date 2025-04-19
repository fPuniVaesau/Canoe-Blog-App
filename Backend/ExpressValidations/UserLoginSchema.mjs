
const UserLoginSchema = {
    //criteria for a valid Username
    username: {
        unique: true,
        isString: {
            errorMessage: "Username must be in string format."
        },
        isLength: {
            options: {
                max: 70
            },
            errorMessage: "Username must be between min: 3 and max: 70 characters long."
        },
        trim: true, 
    },
    // criteria for a valid Password
    password: {
        isString: {
            errorMessage: 'Password must be a string'
        },
        isLength: {
            options: {
                min: 3,
                max: 70
            },
            errorMessage: "Password must be between min(3) and max(70) characters long."
        },
        trim: true
    }
    // criteria for a valid Email Address
    /*
    email: {
        isString: {
            errorMessage: "Email must be in string format"
        },
        isLength: {
            options: {
                max: 70
            },
            errorMessage: "Password must be min: 3 and max: 70 characters long."
        },
        trim: true
    }
    */    
}

export default UserLoginSchema