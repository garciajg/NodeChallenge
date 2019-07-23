import commentController from '../controllers/comment.controller';

// User routes
const commentRoutes = (router) => {
    router.route('/posts/:postId/comments')
        .post(commentController.createComment)
        .get(commentController.getAllCommentsFromPost);
}

export default commentRoutes;