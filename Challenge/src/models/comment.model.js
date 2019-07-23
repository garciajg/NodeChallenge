import { Schema, model } from 'mongoose';

// Comment Mongo Schema

/*
const commentSchema = new Schema({
    // Create fields
    
});
*/

const commentSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 5
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: 'Post'
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Comment = model('Comment', commentSchema);

export default Comment;