const blogResolver = require('./blogresolver');
const userResolver = require('./userresolver');


const resolvers = [
    blogResolver,
    userResolver
]

module.exports = resolvers