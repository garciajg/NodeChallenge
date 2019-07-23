import postController from '../controllers/post.controller';

// User routes
const postRoutes = (router) => {
    router.route('/posts')
        .post(postController.createPost)
        .get(postController.getAllPosts);
}

export default postRoutes;