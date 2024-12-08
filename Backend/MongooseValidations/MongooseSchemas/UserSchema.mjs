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
    }
}, {timestamps: true})

const User = mongoose.model("User", createNewUserSchema);

export default User;