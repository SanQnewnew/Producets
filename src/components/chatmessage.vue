<template>
    <div class="msgmain" ref="chatroom">
        <div class="father" v-for="item in store.chatmessage">
            <div class="AI" v-if="item.uid == 0">
                <div class="AIphoto">
                    <img src="../assets/OIP-C.jpg" class="mimg" />
                </div>
                <div class="AIsendmsg">
                    <div class="AImsg">
                        {{ item.text }}
                    </div>
                </div>
            </div>
            <div class="user" v-if="item.uid == 1">
                <div class="usersendmsg">
                    <div class="usermsg">
                        {{ item.text }}
                    </div>
                </div>
                <div class="userphoto">
                    <img src="../assets/photo.jpg" class="mimg" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onUpdated, ref } from 'vue'
import { useStore } from '../pinia/store.js';

const store = useStore()
const chatroom = ref(null)
const settime = () => setTimeout(() => {
    store.chatmessage.push({ uid: 0, text: '本站开发者：路远兮' });
}, 2000);
settime();

function scrollbottom() {
    let chatrooms = chatroom.value
    chatrooms.scrollTop = chatrooms.scrollHeight
    console.log('最新高度');
}
onUpdated(() => {
    scrollbottom()
})
</script>

<style scoped>
.msgmain {
    width: 100%;
    height: 100%;
    overflow: auto;
}

.msgmain::-webkit-scrollbar {
    display: none;
}

.AI,
.user {
    display: flex;
}

.user {
    margin: 8px 0;
    right: 0;
    justify-content: flex-end;
}

.AI {
    margin: 8px 0;
}

.AIphoto,
.userphoto {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
}

.mimg {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.AImsg,
.usermsg {
    max-width: 300px;
    white-space: normal;
    word-break: break-all;
    width: auto;
    background-color: #272A37;
    margin-left: 8px;
    padding: 8px;
    border-radius: 10px;
    font-size: 14px;
}

.usermsg {
    margin-right: 8px;
}
</style>
