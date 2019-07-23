require('dotenv').config();
import mongoose from 'mongoose';

import User from './user.model';
import Post from './post.model';
import Comment from './comment.model';

// Database Connection
const connectDb = () => {
    return mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true }).then(() => console.log('Connected to database'));
}

const models = { User, Post, Comment };

export { connectDb };

export default models;