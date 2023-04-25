<template>
  <div class="bodys">
    <div class="main">
      <headers />
      <textmain />
    </div>
  </div>
</template>

<script setup>
import headers from './roomhead.vue'
import textmain from './roommain.vue'
</script>

<style scoped>
.bodys {
  height: 100%;
  width: 100%;
  background-color: #979DA7;
  display: flex;
  justify-content: center;
  align-items: center;
}
.main{
  width: 90%;
  height: 90%;
  background-color: #272A37;
  border-radius: 20px;
  color: white;
  overflow: hidden;
}
</style>
