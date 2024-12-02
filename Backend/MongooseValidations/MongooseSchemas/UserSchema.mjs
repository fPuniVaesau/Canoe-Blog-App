import {mongoose, Schema} from "mongoose";

const ObjectID = Schema.ObjectId
const UserSchema = new Schema({
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

const User = mongoose.model("User", UserSchema);

export default User;