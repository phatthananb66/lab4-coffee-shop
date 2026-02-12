<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d04cf2273d2c40046cb6ce93843f5d32e0abe2d9
// src/routes.js

const CoffeeController = require('./controllers/CoffeeController')
const UserController = require('./controllers/UserController')
const UserAuthenController = require('./controllers/UserAuthenController')
<<<<<<< HEAD
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
=======

module.exports = (app) => {

    // ===============================
    // Users Routes
    // ===============================
    app.get('/users', UserController.index)   // ดูผู้ใช้ทั้งหมด
    app.get('/user/:userId', UserController.show) // ดูผู้ใช้รายคน
    app.post('/user', UserController.create)  // เพิ่มผู้ใช้
    app.put('/user/:userId', UserController.put) // แก้ไขผู้ใช้
    app.delete('/user/:userId', UserController.remove) // ลบผู้ใช้


    // ===============================
    // Coffee Routes
    // ===============================
    app.get('/coffees', CoffeeController.index)        // ดูเมนูทั้งหมด
    app.post('/coffee', CoffeeController.create)       // เพิ่มเมนู
    app.put('/coffee/:coffeeId', CoffeeController.put) // แก้ไขเมนู
    app.delete('/coffee/:coffeeId', CoffeeController.remove) // ลบเมนู
    app.get('/coffee/:coffeeId', CoffeeController.show) // ดูเมนูรายตัว
    // ===============================
    //  Routes Login
    // ===============================
    app.post('/login', UserAuthenController.login)
    app.post('/register', UserAuthenController.register)
}
=======
const DrinkController = require('./controllers/DrinkController')
 
module.exports = (app) => {
 
    // get all drinks
    app.get('/drinks', DrinkController.index)
 
    // get drink by id
    app.get('/drink/:id', DrinkController.show)
 
    // create drink
    app.post('/drink', DrinkController.create)
 
    // update drink
    app.put('/drink/:id', DrinkController.update)
 
    // delete drink
    app.delete('/drink/:id', DrinkController.delete)
}
>>>>>>> 428c46f3a2fab43bdc494251a56ba8375d3e4b2a
>>>>>>> d04cf2273d2c40046cb6ce93843f5d32e0abe2d9
