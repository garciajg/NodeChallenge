import Post from '../models/post.model';
import User from '../models/user.model';
import Comment from '../models/comment.model';

export default {
    getAllCommentsFromPost: async (postId) => {
        // Complete this
    },

    createComment: async (postId, text, rating) => {

        // Fix this, hint: post is undefined when user tries to pull its data

        const post = Post
            .findOne({ _id: postId });
        
        const user =  User.findOne(post.author._id);

        if (!post) return Error('Post not found');

        const comment = new Comment({
            text: text,
            rating: rating,
            post: post,
            author: user
        });

        user.comments.push(comment);
        post.comments.push(comment);

        await user.save();
        await post.save();
        await comment.save();

        return comment;
    }
}