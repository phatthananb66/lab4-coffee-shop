<<<<<<< HEAD
const path = require('path')

module.exports = {
  port: process.env.PORT || 8081,

  db: {
    database: 'coffeeshop-db',
    user: 'root',
    password: 'root',
    options: {
      dialect: 'sqlite',
      storage: './coffeeshop-db.sqlite',
      logging: false
    }
  },

  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}
=======
// src/config/config.js
module.exports = {
    port: process.env.PORT || 8081,
    db: {
        database: process.env.DB_NAME || 'coffeeshop-db',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || 'root',
        options: {
            dialect: 'sqlite',
            storage: './coffeeshop-db.sqlite',
            logging: false
        },
        authentication: {
        jwtSecret: process.env.JWT_SECRET || 'secret'
    }
    }
}

>>>>>>> d04cf2273d2c40046cb6ce93843f5d32e0abe2d9
