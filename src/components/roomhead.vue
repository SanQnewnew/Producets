<template>
  <div class="header-main">
    <div class="left">
      <h2>AI智能聊天室</h2>
    </div>
    <div class="right">
      <n-button type="info" @click="store.loginstate = true">
        登录/注册
      </n-button>
      <n-modal v-model:show="store.loginstate">
        <loginmodal />
      </n-modal>
    </div>
  </div>
</template>

<script setup>
import loginmodal from './login/loginmodal.vue'
import { NButton, NModal } from 'naive-ui';
import {useStore} from '../pinia/store.js'

const store = useStore()
</script>

<style scoped>
.header-main {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.left {
  margin-left: 100px;
  margin-top: 10px;
}

.right {
  margin-top: 50px;
  margin-right: 50px;
}
</style>
