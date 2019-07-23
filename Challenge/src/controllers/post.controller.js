import postRepository from '../repositories/post.repository';

export default {
    getAllPosts: async (req, res) => {
        try {
            const { authorId } = req.query || '5d36a0824269aa57d09e1715';
            const posts = await postRepository.getAllPosts(authorId);

            return res.status(200).json(posts);
        } catch (error) {
            console.log(error);
            return res.status(400).json({ error: error });
        }
    },

    createPost: async (req, res) => {
        try {
            const { authorId, body, title } = req.body;
            
            const post = await postRepository.createPost(authorId, body, title);

            return res.status(200).json(post)
        } catch (error) {
            console.log(error);
            return res.status(400).json({ error: error })
        }
    }
}                                   