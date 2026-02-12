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
        <div>สถานะ: {{ coffee.status }}</div> <!-- ✅ เพิ่มบรรทัดนี้ -->

        <p>
          <!-- ทุกคนดูรายละเอียดได้ -->
          <button @click="navigateTo('/coffee/' + coffee.id)">
            ดูรายละเอียด
          </button>

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
import { useAuthenStore } from '../../stores/authen'

export default {
  data () {
    return {
      coffees: []
    }
  },

  async created () {
    this.refreshData()
  },

  computed: {
    isLoggedIn () {
      const authenStore = useAuthenStore()
      return authenStore.isUserLoggedIn
    }
  },

  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },

    async deleteCoffee (coffeeId) {   // ✅ รับ id
      const result = confirm('Want to delete?')
      if (result) {
        try {
          await CoffeesService.delete(coffeeId) // ✅ ส่ง id
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
