import Post from '../models/post.model';
import User from '../models/user.model';

export default {
    getAllPosts: async (authorId) => {
        // Gets all postsfor a specific user
        try {
            return new Promise( async (resolve, reject) => {
                await User
                    .findOne({ _id: authorId })
                    .populate('posts')
                    .exec((error, user) => {
                       
                        if (error) reject(error);
                        if (!user) {
                            reject(new Error('Author not found'));
                        }

                        resolve(user.posts);
                    });
            })
        } catch (error) {
            console.log(error);
            throw error;
        }
    },

    createPost: async (authorId, body, title) => {
        try {
            return new Promise( async (resolve, reject) => {
                const user = await User
                    .findOne({ _id: authorId })
                    .catch(error => reject(error));
                
                if (!user) {
                    reject(Error('Author not found'));
                }

                const post = new Post({
                    body: body,
                    title: title,
                    author: user
                });

                user.posts.push(post);

                await user.save();
                await post.save();

                resolve(post);
            });
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}