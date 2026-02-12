<template>
  <div>
<<<<<<< HEAD
    <!-- ⭐ ปุ่ม Logout -->
    <p>
      <button v-on:click="logout">Logout</button>
    </p>

=======
>>>>>>> d04cf2273d2c40046cb6ce93843f5d32e0abe2d9
    <h1>Get All Users</h1>

    <div>จำนวนผู้ใช้งาน {{ users.length }}</div>

    <div v-if="users.length > 0">
      <div
        v-for="user in users"
        :key="user.id"
        style="margin-bottom: 15px;"
      >
        <div>id: {{ user.id }}</div>
        <div>ชื่อ-นามสกุล: {{ user.name }} {{ user.lastname }}</div>
        <div>email: {{ user.email }}</div>
        <div>status: {{ user.status }}</div>
        <div>type: {{ user.type }}</div>

<<<<<<< HEAD
        <!-- ⭐ ปุ่มเดิมทั้งหมด -->
=======
        <!-- ⭐ ปุ่มตามสไลด์อาจารย์ -->
>>>>>>> d04cf2273d2c40046cb6ce93843f5d32e0abe2d9
        <p>
          <button v-on:click="navigateTo('/user/' + user.id)">
            ดูข้อมูลผู้ใช้
          </button>

          <button v-on:click="navigateTo('/user/edit/' + user.id)">
            แก้ไขข้อมูล
          </button>

<<<<<<< HEAD
=======
          <!-- ⭐ ปุ่มลบ -->
>>>>>>> d04cf2273d2c40046cb6ce93843f5d32e0abe2d9
          <button v-on:click="deleteUser(user)">
            ลบข้อมูล
          </button>
        </p>

        <hr />
      </div>
    </div>

    <div v-else>
      ยังไม่มีข้อมูลผู้ใช้งาน
    </div>
  </div>
</template>

<script>
import UsersService from '../../services/UsersService'
<<<<<<< HEAD
import { useAuthenStore } from '../../stores/authen'
=======
>>>>>>> d04cf2273d2c40046cb6ce93843f5d32e0abe2d9

export default {
  data () {
    return {
      users: []
    }
  },

  async created () {
    this.users = (await UsersService.index()).data
  },

  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },

<<<<<<< HEAD
    // ⭐ ลบผู้ใช้ (ของเดิม)
    async deleteUser (user) {
      let result = confirm('Want to delete?')
=======
    // ⭐  ลบผู้ใช้ (ตามสไลด์)
    async deleteUser (user) {
      let result = confirm("Want to delete?")
>>>>>>> d04cf2273d2c40046cb6ce93843f5d32e0abe2d9
      if (result) {
        try {
          await UsersService.delete(user)
          this.refreshData()
        } catch (err) {
          console.log(err)
        }
      }
    },

<<<<<<< HEAD
    // ⭐ โหลดข้อมูลใหม่ (ของเดิม)
    async refreshData () {
      this.users = (await UsersService.index()).data
    },

    // ⭐ Logout (เพิ่มใหม่)
    logout () {
      const authenStore = useAuthenStore()
      authenStore.logout()   // ล้าง token + user

      this.$router.push({
        name: 'login'
      })
=======
    // ⭐ โหลดข้อมูลใหม่หลังลบ
    async refreshData () {
      this.users = (await UsersService.index()).data
>>>>>>> d04cf2273d2c40046cb6ce93843f5d32e0abe2d9
    }
  }
}
</script>
