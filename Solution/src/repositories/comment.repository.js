import Post from '../models/post.model';
import User from '../models/user.model';
import Comment from '../models/comment.model';

export default {
    getAllCommentsFromPost: async (postId) => {
        try {
            return new Promise( async (resolve, reject) => {

                await Post
                    .findOne({ postId })
                    .populate('comments')
                    .exec((error, post) => {
                        if (error) reject(error);
                        if (!post) reject(new Error('Post not found'));

                        resolve(post.comments)
                    });
            })
        } catch (error) {
            console.log(error);
            throw error;
        }
    },

    createComment: async (postId, text, rating) => {
        try {
            return new Promise( async (resolve, reject) => {
                const post = await Post
                    .findOne({ postId });
                const user = await User.findOne(post.author._id);

                if (!post) reject(Error('Post not found'));

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

                resolve(comment);

                    // .populate('author')
                    // .exec( async (error, post) => {
                    //     if (error) reject(error);
                    //     if (!post) reject(Error('Post not found'));

                    //     const comment = new Comment({
                    //         text: text,
                    //         rating: rating,
                    //         post: post,
                    //         author: post.author
                    //     });
                    //     const user = await User.findOne(post.author._id);

                    //     user.comments.push(comment);
                    //     post.comments.push(comment);

                    //     await user.save();
                    //     await post.save();
                    //     await comment.save();

                    //     resolve(comment);
                    // });
            });
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}