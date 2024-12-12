import {defineStore} from 'pinia';
import axios from 'axios';
import { nanoid } from 'nanoid';

export const useTalkStore = defineStore('talk',{
    actions: {
        async getATalk() {
            // 发请求,下面这行的写法是:连续结构赋值+重命名
            let {data:{content:title}} = await axios.get('https://api.uomg.com/api/rand.qinghua')
            // 把请求回来的字符串,包装成一个对象
            let obj = {id:nanoid(), title}
            // console.log(obj);
            // 放到数组中
            this.talkList.unshift(obj);
        }
    },
    // 真正存储数据的地方
    state() {
        return {
            talkList:[
                {id:'ddasedsd01', title:'今天你有点怪,哪里怪?怪好看的的!'},
                {id:'ddasedsd02', title:'草莓,蓝莓,蔓越莓,今天你想我了没?'},
                {id:'ddasedsd03', title:'心里给你留了一块地,我的死心踏地'}
            ]
        }
    }
});