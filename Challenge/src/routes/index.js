import userRoutes from './user.route';
import postRoutes from './post.route';
import commentRoutes from './comment.route'

// route export for app
const routes = (router) => {
    userRoutes(router);
    postRoutes(router);
    commentRoutes(router);

    return router;
}

export default routes;