<template>
    <div class="boxmain">
        <div class="chatbox">
            <chatmessage />
        </div>
        <div class="maininput">
            <textarea ref="myref" @input="changeheight" rows="1" cols="90" class="userinput" placeholder="请输入您的内容"
                @keydown="messageSendlisten" v-model.trim="usertext"></textarea>
            <n-button type="info" class="btn" @click="messageSend">
                <n-icon size="15">
                    <SendFilled />
                </n-icon>
            </n-button>
            <n-modal v-model:show="store.loginstate">
                <loginmodal />
            </n-modal>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { NButton, NIcon, NModal, useMessage, NMessageProvider } from 'naive-ui'
import { SendFilled } from '@vicons/material'
import chatmessage from './chatmessage.vue'
import loginmodal from './login/loginmodal.vue'
import { useStore } from '../pinia/store.js'

const myref = ref()
const store = useStore()
const usertext = ref()

function changeheight(e) {
    const textarea = e.target
    textarea.style.height = 'auto'
    textarea.style.height = textarea.scrollHeight - 16 + 'px'
    console.log(textarea.style.height);
}
function messageSend() {
    if (store.userstate.id) {
        if (usertext.value) {
            store.chatmessage.push({
                uid: 1,
                text: usertext.value
            })
            usertext.value = '' //每次发送后清空输入框
            myref.value.style.height = 16 + 'px' //每次发送消息之后重置textare为一行的高度
        } else {
            return
        }
    }else{
        store.loginstate = true
    }
}
function messageSendlisten(event) {
    if (event.keyCode === 13) {
        event.preventDefault(); // 阻止浏览器默认换行操作
        messageSend(); // 发送文本
        return false;
    }
}
function warning() {
    message.warning("How many roads must a man walk down");
}
</script>

<style scoped>
.boxmain {
    width: 100%;
    height: 100%;
    padding: 20px;
    overflow: hidden;
    position: relative;
}

.chatbox {
    width: 95%;
    height: 80%;
    border-radius: 10px;
}

.maininput {
    width: 100%;
    display: flex;
    justify-content: center;
    /* position: absolute; */
    /* margin-top: 30px; */
    position: absolute;
    bottom: 60px;
    right: 50px;
}

.userinput {
    resize: none;
    border-radius: 5px;
    background-color: #313746;
    border: 1px solid white;
    color: white;
    font-size: 14px;
    padding: 8px;
    max-height: 60px;
}

.userinput::-webkit-scrollbar {
    width: 0;
    height: 0;
}

.btn {
    margin-left: 10px;
    border-radius: 5px;
    box-shadow: 0 0 5px #118BFA;
    position: absolute;
    bottom: 0px;
    right: 60px;
}
</style>
