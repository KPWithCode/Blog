const Usermodel = require('../../models/blogmodel');

const userResolver = {
    RootQuery: {
        getUsers: async () => {
            try {
                const users = await Usermodel.findAll()
                return users
            } catch (err) {
                throw err;
            }
        }
    },
    RootMutation: {

    }
}

module.exports = userResolver