import { Schema, model } from 'mongoose';

// User Mongo Schema
const userSchema = new Schema({
    username: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    posts: [{
        type: Schema.Types.ObjectId,
        ref: 'Post'
    }],

    //Add comments
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }]
});

const User = model('User', userSchema);

export default User;