const { Coffee } = require('../models')

module.exports = {

<<<<<<< HEAD
  // ===============================
  // ดึงรายการกาแฟทั้งหมด
  // GET /coffees
  // ===============================
  async index (req, res) {
    try {
      const coffees = await Coffee.findAll()
      res.send(coffees)
    } catch (err) {
      res.status(500).send(err)
    }
  },

  // ===============================
  // ดูรายละเอียดกาแฟ
  // GET /coffee/:coffeeId
  // ===============================
  async show (req, res) {
    try {
      const coffee = await Coffee.findByPk(req.params.coffeeId)

      if (!coffee) {
        return res.status(404).send({ message: 'Coffee not found' })
      }

      res.send(coffee)
    } catch (err) {
      res.status(500).send(err)
    }
  },

  // ===============================
  // เพิ่มเมนูกาแฟใหม่
  // POST /coffee
  // ===============================
=======
  // ดูรายการกาแฟทั้งหมด
  async index (req, res) {
    const coffees = await Coffee.findAll()
    res.send(coffees)
  },

  // เพิ่มเมนูกาแฟใหม่
>>>>>>> d04cf2273d2c40046cb6ce93843f5d32e0abe2d9
  async create (req, res) {
    try {
      const coffee = await Coffee.create(req.body)
      res.send(coffee)
    } catch (err) {
<<<<<<< HEAD
      res.status(400).send(err)
    }
  },

  // ===============================
  // แก้ไขข้อมูลกาแฟ
  // PUT /coffee/:coffeeId
  // ===============================
  async update (req, res) {
    try {
      const coffee = await Coffee.findByPk(req.params.coffeeId)

      if (!coffee) {
        return res.status(404).send({ message: 'Coffee not found' })
      }

      await coffee.update(req.body)

      res.send({ message: 'Coffee updated successfully' })
    } catch (err) {
      res.status(400).send(err)
    }
  },

  // ===============================
  // ลบเมนูกาแฟ
  // DELETE /coffee/:coffeeId
  // ===============================
  async delete (req, res) {
    try {
      const coffee = await Coffee.findByPk(req.params.coffeeId)

      if (!coffee) {
        return res.status(404).send({ message: 'Coffee not found' })
      }

      await coffee.destroy()

      res.send({ message: 'Coffee deleted successfully' })
    } catch (err) {
      res.status(400).send(err)
    }
  }

=======
      res.status(500).send(err)
    }
  },

  // แก้ไขข้อมูลกาแฟ
  async put (req, res) {
    try {
      await Coffee.update(req.body, {
        where: { id: req.params.coffeeId }
      })
      res.send({ message: 'Coffee updated' })
    } catch (err) {
      res.status(500).send(err)
    }
  },

  // ลบเมนูกาแฟ
  async remove (req, res) {
    try {
      await Coffee.destroy({
        where: { id: req.params.coffeeId }
      })
      res.send({ message: 'Coffee deleted' })
    } catch (err) {
      res.status(500).send(err)
    }
  },

  // ดูรายละเอียดกาแฟ
  async show (req, res) {
    try {
      const coffee = await Coffee.findByPk(req.params.coffeeId)
      res.send(coffee)
    } catch (err) {
      res.status(500).send(err)
    }
  }
>>>>>>> d04cf2273d2c40046cb6ce93843f5d32e0abe2d9
}
