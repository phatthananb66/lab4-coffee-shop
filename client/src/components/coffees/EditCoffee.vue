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
        <input v-model.number="coffee.price" type="number" />
      </p>

      <p>
        Type:
        <select v-model="coffee.type">
          <option value="hot">hot</option>
          <option value="iced">iced</option>
          <option value="frappe">frappe</option>
        </select>
      </p>

      <!-- ✅ เพิ่ม Status ตรงนี้ -->
      <p>
        Status:
        <select v-model="coffee.status">
          <option value="มีจำหน่าย">มีจำหน่าย</option>
          <option value="หมด">หมด</option>
        </select>
      </p>

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
    const coffeeId = this.$route.params.coffeeId
    this.coffee = (await CoffeesService.show(coffeeId)).data
  },

  methods: {
    async updateCoffee () {
      try {
        await CoffeesService.put(this.coffee)
        this.$router.push('/coffees')
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>
