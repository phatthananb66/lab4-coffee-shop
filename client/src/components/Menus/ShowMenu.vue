<template>
  <div>
    <h1>Show Menu</h1>
    <p>menu ID: {{ menuId }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menuId: null
    }
  },
  created () {
    // โค้ดนี้ถูกรันทันทีที่ Component ถูกสร้างขึ้น (ก่อนเมาท์)
    this.menuId = this.$route.params.menuId 
    // ณ จุดนี้ this.userId ได้รับค่าแล้ว และจะถูกใช้ในการ Render UI
  }
}
</script>