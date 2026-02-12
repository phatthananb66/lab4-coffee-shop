import Api from './Api'

export default {
<<<<<<< HEAD

  index () {
    return Api().get('coffees')
  },

  show (coffeeId) {
    return Api().get('coffee/' + coffeeId)
  },

  post (coffee) {
    return Api().post('coffee', coffee)
  },

  put (coffee) {
    return Api().put('coffee/' + coffee.id, coffee)
  },

  delete (coffeeId) {
    return Api().delete('coffee/' + coffeeId)
  }

=======
  index () {
    return Api().get('coffees')
  },
  show (coffeeId) {
    return Api().get('coffee/' + coffeeId)
  },
  post (coffee) {
    return Api().post('coffee', coffee)
  },
  put (coffee) {
    return Api().put('coffee/' + coffee.id, coffee)
  },
  delete (coffee) {
    return Api().delete('coffee/' + coffee.id)
  }
>>>>>>> d04cf2273d2c40046cb6ce93843f5d32e0abe2d9
}
