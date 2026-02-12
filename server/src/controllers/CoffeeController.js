const { Coffee } = require('../models')

module.exports = {

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
  async create (req, res) {
    try {
      const coffee = await Coffee.create(req.body)
      res.send(coffee)
    } catch (err) {
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

}
