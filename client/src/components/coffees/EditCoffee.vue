<template>
  <div>
    <h1>Edit Coffee</h1>

    <!-- แสดงฟอร์มเมื่อโหลดข้อมูลมาแล้ว -->
    <div v-if="coffee">
      <p>
        Name:
        <input v-model="coffee.name" type="text" />
      </p>

      <p>
        Price:
<<<<<<< HEAD
        <input v-model.number="coffee.price" type="number" />
=======
        <input v-model="coffee.price" type="number" />
>>>>>>> d04cf2273d2c40046cb6ce93843f5d32e0abe2d9
      </p>

      <p>
        Type:
        <select v-model="coffee.type">
          <option value="hot">hot</option>
          <option value="iced">iced</option>
          <option value="frappe">frappe</option>
        </select>
      </p>

<<<<<<< HEAD
      <!-- ✅ เพิ่ม Status ตรงนี้ -->
      <p>
        Status:
        <select v-model="coffee.status">
          <option value="มีจำหน่าย">มีจำหน่าย</option>
          <option value="หมด">หมด</option>
        </select>
      </p>

=======
>>>>>>> d04cf2273d2c40046cb6ce93843f5d32e0abe2d9
      <p>
        Description:
        <textarea v-model="coffee.description"></textarea>
      </p>

      <p>
        <button @click="updateCoffee">บันทึกการแก้ไข</button>
      </p>
    </div>

    <!-- ระหว่างโหลดข้อมูล -->
    <div v-else>
      Loading...
    </div>
  </div>
</template>

<script>
import CoffeesService from '../../services/CoffeesService'

export default {
  data () {
    return {
      coffee: null
    }
  },

  async created () {
<<<<<<< HEAD
    const coffeeId = this.$route.params.coffeeId
=======
    // 1️⃣ ดึง coffeeId จาก URL
    const coffeeId = this.$route.params.coffeeId

    // 2️⃣ ดึงข้อมูลเดิมจาก backend
>>>>>>> d04cf2273d2c40046cb6ce93843f5d32e0abe2d9
    this.coffee = (await CoffeesService.show(coffeeId)).data
  },

  methods: {
    async updateCoffee () {
      try {
<<<<<<< HEAD
        await CoffeesService.put(this.coffee)
=======
        // 3️⃣ ส่งข้อมูลไปอัปเดต
        await CoffeesService.put(this.coffee)

        // 4️⃣ กลับไปหน้ารายการกาแฟ
>>>>>>> d04cf2273d2c40046cb6ce93843f5d32e0abe2d9
        this.$router.push('/coffees')
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>
