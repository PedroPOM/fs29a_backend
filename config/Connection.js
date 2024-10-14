const { Sequelize } = require('sequelize')
require('dotenv').config()

// const Connection = new Sequelize({
//     dialect: 'postgres',
//     host: process.env.HOST || 'localhost',
//     port:  process.env.PORT || '5432',
//     username:  process.env.USERNAME || 'postgres',
//     password: process.env.PASSWORD || '',
//     database: process.env.DATABASE || 'backend'
// })

// const Connection = new Sequelize({
//     dialect: 'postgres',
//     host: 'localhost',
//     port:  '5432',
//     username: 'postgres',
//     password: '1234',
//     database: 'fs29'
// })

const Connection = new Sequelize({
    dialect: 'postgres',
    host: 'dpg-cs6pnrlumphs73e8oqv0-a',
    port:  '5432',
    username: 'fs29pedro_user',
    password: 'etzpyjcyFZRMp0Z8a8taf2OI6eRsSvAd',
    database: 'fs29pedro'
})

module.exports = Connection;