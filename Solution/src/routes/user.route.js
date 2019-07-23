import userController from '../controllers/user.controller';

// User routes
const userRoutes = (router) => {
    router.route('/users')
        .post(userController.createUser)
        .get(userController.getAllUsers);
}

export default userRoutes;