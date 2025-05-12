import {mongoose, Schema} from "mongoose";

const ObjectID = Schema.ObjectId
const createNewUserSchema = new Schema({
    userID: ObjectID,
    firstname :{
        required: true,
        type: String
    },
    lastname : {
        required: true, 
        type: String
    },
    password: {
        required: true,
        type: String
    },
    username :{
        required: true, 
        type: String,
        unique: true
    },
    email:{
        require: true, 
        type: String
    },
    // since a user can have multiple blogs, the blogs field is an array.
    blogs : [{type: ObjectID, ref: "BlogPost"}]
}, {timestamps: true})

const User = mongoose.model("User", createNewUserSchema);

export default User;