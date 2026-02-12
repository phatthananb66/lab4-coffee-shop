<template>
  <div>
    <h1>Get All Coffees</h1>

    <div>จำนวนเมนู {{ coffees.length }}</div>

    <div v-if="coffees.length > 0">
      <div
        v-for="coffee in coffees"
        :key="coffee.id"
        style="margin-bottom: 15px;"
      >
        <div>id: {{ coffee.id }}</div>
        <div>ชื่อเมนู: {{ coffee.name }}</div>
        <div>ราคา: {{ coffee.price }}</div>
        <div>ประเภท: {{ coffee.type }}</div>
<<<<<<< HEAD
        <div>สถานะ: {{ coffee.status }}</div> <!-- ✅ เพิ่มบรรทัดนี้ -->

        <p>
          <!-- ทุกคนดูรายละเอียดได้ -->
=======

        <!-- ⭐ ปุ่มตามแนวอาจารย์ -->
        <p>
>>>>>>> d04cf2273d2c40046cb6ce93843f5d32e0abe2d9
          <button @click="navigateTo('/coffee/' + coffee.id)">
            ดูรายละเอียด
          </button>

<<<<<<< HEAD
          <!-- 🔒 ปุ่มจัดการ แสดงเฉพาะตอน Login -->
          <template v-if="isLoggedIn">
            <button @click="navigateTo('/coffee/edit/' + coffee.id)">
              แก้ไข
            </button>

            <!-- ✅ ส่ง id แทน object -->
            <button @click="deleteCoffee(coffee.id)">
              ลบเมนู
            </button>
          </template>
=======
          <button @click="navigateTo('/coffee/edit/' + coffee.id)">
            แก้ไข
          </button>

          <button @click="deleteCoffee(coffee)">
            ลบเมนู
          </button>
>>>>>>> d04cf2273d2c40046cb6ce93843f5d32e0abe2d9
        </p>

        <hr />
      </div>
    </div>

    <div v-else>
      ยังไม่มีเมนูกาแฟ
    </div>
  </div>
</template>

<script>
import CoffeesService from '../../services/CoffeesService'
<<<<<<< HEAD
import { useAuthenStore } from '../../stores/authen'
=======
>>>>>>> d04cf2273d2c40046cb6ce93843f5d32e0abe2d9

export default {
  data () {
    return {
      coffees: []
    }
  },

  async created () {
    this.refreshData()
  },

<<<<<<< HEAD
  computed: {
    isLoggedIn () {
      const authenStore = useAuthenStore()
      return authenStore.isUserLoggedIn
    }
  },

=======
>>>>>>> d04cf2273d2c40046cb6ce93843f5d32e0abe2d9
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },

<<<<<<< HEAD
    async deleteCoffee (coffeeId) {   // ✅ รับ id
      const result = confirm('Want to delete?')
      if (result) {
        try {
          await CoffeesService.delete(coffeeId) // ✅ ส่ง id
=======
    async deleteCoffee (coffee) {
      let result = confirm('Want to delete?')
      if (result) {
        try {
          await CoffeesService.delete(coffee)
>>>>>>> d04cf2273d2c40046cb6ce93843f5d32e0abe2d9
          this.refreshData()
        } catch (err) {
          console.log(err)
        }
      }
    },

    async refreshData () {
      this.coffees = (await CoffeesService.index()).data
    }
  }
}
</script>
