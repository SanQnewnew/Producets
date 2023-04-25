<template>
  <div class="loginmodal">
    <div class="loginleft">
      <h2>Chat AI智能聊天</h2>
      <div class="loginimg">
        <img src="../../assets/OIP-C.jpg" class="imgs" />
      </div>
    </div>
    <div class="loginright">
      <div class="loginhead">
        <div :class='headindex == true ? "activetext" : "headtext"' @click="changelogin">账号登录</div>
        <div :class='headindex == false ? "activetext" : "headtext"' @click="changeregister">注册</div>
      </div>
      <div class="logininput" v-show="headindex == true">
        <n-form :model="user">
          <input type="text" placeholder="请输入账号" class="userinput" v-model="user.name" />
          <input type="password" placeholder="请输入密码" class="pwdinput" v-model="user.password" />
        </n-form>
        <div class="forget">
          <span>忘记密码</span>
        </div>
        <n-button type="info" class="loginbtn" @click="userlogin">
          登录
        </n-button>
      </div>
      <div class="registerinput" v-show="headindex == false">
        <input type="text" placeholder="请输入手机号" class="userinput" />
        <input type="password" placeholder="请输入密码" class="pwdinput" />
        <input type="text" placeholder="请输入邀请码" class="pwdinput" />
        <n-button type="info" class="loginbtn">
          注册
        </n-button>
      </div>
      <div class="lasttext">
        <p></p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { NButton } from 'naive-ui'
import { ref } from 'vue'
import { useStore } from '../../pinia/store';

const headindex = ref(true)
const store = useStore()
const user = {
  uid: '1',
  name: '',
  password: '',
}

function changelogin() {
  headindex.value = true
}
function changeregister() {
  headindex.value = false
}
function userlogin() {
  if (user.name == 'admin') {
    if (user.password == '123456') {
      store.userstate.id = user.name
      store.loginstate = false
    }else{
      alert('您输入的账号或密码错误！')
    }
  }else{
    alert('您输入的账号或密码错误！')
  }

}
</script>

<style scoped>
.loginmodal {
  background-color: white;
  height: 350px;
  width: 700px;
  color: black;
  display: flex;
  border-radius: 5px;
}

.loginleft {
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #EBEBEB;
}

.loginimg {
  height: 100px;
  width: 100px;
  margin-bottom: 150px;
}

.imgs {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.loginright {
  width: 60%;
  height: 100%;
}

.loginhead {
  margin-top: 13px;
  display: flex;
  padding: 0 20px;
}

.headtext {
  margin-left: 25px;
  font-size: 18px;
  padding-bottom: 8px;
  cursor: pointer;
}

.activetext {
  font-size: 18px;
  margin-left: 25px;
  font-weight: bold;
  border-bottom: 3px solid #056DE8;
  cursor: pointer;
}

.logininput,
.registerinput {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinput,
.pwdinput {
  margin-top: 20px;
  width: 80%;
  padding: 10px;
  border: none;
  border-bottom: 1px solid #EBEBEB;
  outline: none;
}

.forget {
  margin-top: 10px;
  width: 80%;
  text-align: right;
  color: #444444;
}

.loginbtn {
  margin-top: 20px;
  width: 80%;
}
</style>
