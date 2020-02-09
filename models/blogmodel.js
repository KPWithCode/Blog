const Sequelize = require('sequelize');
const db = require('../config/database');

const Blogs = db.define('blogs', {
    title: {
        type: Sequelize.STRING,
        allowNull: false,
        trim:true
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    contact: {
        type: String
    },
    published: {
        type: Sequelize.DATE
    }
}) 

module.exports = Blogs