import { Schema, model } from 'mongoose';

// Post Mongo Schema
const postSchema = new Schema({
    body: {
        type: String,
        required: true,
        maxlength: 1200
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }, 
    title: {
        type: String,
        required: true
    },

    // Add comments
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }]
});

const Post = model('Post', postSchema);

export default Post;