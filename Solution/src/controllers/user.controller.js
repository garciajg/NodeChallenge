import userRepository from '../repositories/user.repository';

export default {
    getAllUsers: async (req, res) => {
        try {
            const users = await userRepository.getAllUsers();

            return res.status(200).json(users);
        } catch (error) {
            console.log(error)
            return res.status(400).json({ error: error })
        }
    },

    createUser: async (req, res) => {
        try {
            let { username, password, email } = req.body;
            const user = await userRepository.createUser(email, username, password);

            return res.status(201).json(user);

        } catch (error) {
            console.log(error);
            return res.status(400).json({ error: error })
        }

    }
}