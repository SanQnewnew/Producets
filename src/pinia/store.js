import { defineStore } from "pinia";

export const useStore = defineStore({
    // id: 必须的，在所有 Store 中唯一
    id: "myGlobalState",
    // state: 返回对象的函数
    state: () => ({
        loginstate: false,
        userstate:[
            {
                id:''
            }
        ],
        chatmessage: [
            {
                uid: 0,
                text: '内置账号为admin，密码为123456'
            },
        ]
    }),
    persist: {
        enabled: false // true表示开启Pinia持久化保存
    }
});