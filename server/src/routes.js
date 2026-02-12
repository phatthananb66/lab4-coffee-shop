// src/routes.js

const CoffeeController = require('./controllers/CoffeeController')
const UserController = require('./controllers/UserController')
const UserAuthenController = require('./controllers/UserAuthenController')
const isAuthenController = require('./controllers/isAuthenController')
const BlogController = require('./controllers/BlogController')

module.exports = (app) => {

  // ===============================
  // Auth Routes
  // ===============================
  app.post('/login', UserAuthenController.login)
  app.post('/register', UserAuthenController.register)

  // ===============================
  // Users Routes (ต้อง login ก่อน)
  // ===============================
  app.get('/users', isAuthenController, UserController.index)
  app.get('/user/:userId', isAuthenController, UserController.show)
  app.post('/user', isAuthenController, UserController.create)
  app.put('/user/:userId', isAuthenController, UserController.put)
  app.delete('/user/:userId', isAuthenController, UserController.remove)

  // ===============================
  // Coffee Routes
  // ===============================
  app.get('/coffees', CoffeeController.index)
  app.get('/coffee/:coffeeId', CoffeeController.show)

  app.post('/coffee',
    isAuthenController,
    CoffeeController.create
  )

  app.put('/coffee/:coffeeId',
    isAuthenController,
    CoffeeController.update
  )

  app.delete('/coffee/:coffeeId',
    isAuthenController,
    CoffeeController.delete
  )

  // ===============================
  // Blog Routes
  // ===============================
  app.post('/blog', BlogController.create)
  app.put('/blog/:blogId', BlogController.put)
  app.delete('/blog/:blogId', BlogController.remove)
  app.get('/blog/:blogId', BlogController.show)
  app.get('/blogs', BlogController.index)
}
