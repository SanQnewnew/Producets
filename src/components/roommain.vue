<template>
  <div class="text-main">
    <div class="left">
        <p>聊天列表</p>
        <div class="chatlist">
            <pictures />
        </div>
    </div>
    <div class="right">
        <div class="chatarea">
            <chatbox />
        </div>
    </div>
  </div>
</template>

<script setup>
import pictures from './profilephoto.vue'
import chatbox from './chatbox.vue';
</script>

<style scoped>
.text-main{
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}
.left{
    margin-left: 30px;
    color: #ACB0BC;
}
.chatarea{
    height: 530px;
    width: 900px;
    background-color: #313746;
    border-radius: 15px;
    margin-right: 30px;
}
.chatlist{
    margin-left: 20px;
}
</style>
