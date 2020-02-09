const Sequelize = require('sequelize');
const db = require('../config/database');

const Users = db.define('users', {
    name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique:true,
        trim:true
    },
    passord: {
        type: Sequelize.STRING,
        allowNull: false,
        trim: true,
        minlength: 5
    }
})

module.exports = Users