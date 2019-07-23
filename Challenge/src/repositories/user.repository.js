import User from '../models/user.model';

export default {
    // Get all users in the database
    getAllUsers: async () => {
        try {
            return new Promise( async (resolve, reject) => {
                // Finding all users
                await User.find({})
                    .populate('posts')
                    .exec((error, users) => {
                        if (error) reject(error);

                        resolve(users);
                    })

                // resolve(users);
            });
        } catch (err) {
            console.log(error);
            throw error
        }
    },

    // Create new user
    createUser: async (email, username, password) => {
        try {
            return new Promise( async (resolve, reject) => {

                let user = new User({
                    username: username,
                    email: email,
                    password: password
                });

                await user.save().catch(error => reject(error))

                resolve(user)
            });
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}