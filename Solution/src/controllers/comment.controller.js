import commentRepository from '../repositories/comment.repository';

export default {
    getAllCommentsFromPost: async (req, res) => {
        try {
            const comments = await commentRepository.getAllCommentsFromPost(req.query.postId);

            return res.status(200).json(comments);
        } catch (error) {
            console.log(error);
            return res.status(400).json({ error: error });
        }
    },

    createComment: async (req, res) => {
        try {
            const { text } = req.body;
            const rating = req.body.rating || null;

            const comment = await commentRepository.createComment(req.query.postId, text, rating);

            return res.status(200).json(comment)
        } catch (error) {
            console.log(error);
            return res.status(400).json({ error: error })
        }
    }
}                                   