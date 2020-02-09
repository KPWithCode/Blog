const Blogmodel = require('../../models/blogmodel');

const blogResolver = {
    RootQuery: {
        getBlogs: async () => {
            try {
                const blogs = await Blogmodel.findAll()
                return blogs;
            } catch (err) {
                throw err
            }
        },
        singleBlog: async (root, { id }) => {
            try {
                const oneBlog = await Blogmodel.findOne({
                    where: {
                        id: id
                    }
                });
                return oneBlog
            } catch (err) {
                throw err
            }
        }
    },
    RootMutation: {
        createBlog: async (root, { title, content, contact, published }) => {
            try {
                const blog = await Blogmodel.create({
                    title,
                    content,
                    contact,
                    published
                });
                return blog;
            } catch (err) {
                throw err;
            }
        }
    }
}

module.exports = blogResolver