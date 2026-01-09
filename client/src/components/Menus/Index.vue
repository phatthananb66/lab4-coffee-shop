<template>
  <div>
    <h1>Get All Menu</h1>
    <p><button @click="navigateTo('/Menus/Create')">สร้างผู้ใช้งาน</button></p>
  </div>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<style scoped>
/* CSS เฉพาะหน้านี้ */
</style>