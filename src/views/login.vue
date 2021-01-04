<template>
    <div id="login">
        <!-- <router-link :to="{name:'/list',params:{userId:2344}}"> -->
        <!-- <router-link to="/todoList"> -->
        <router-link :to="{path:'/todoList',query:{userId:2454}}">
            <span>{{state.title}}</span>
        </router-link>
        <!-- :clazz="state.mycla" clazz="myInput" v-model="state.userName"  -->
        <pc-input 
            type="text" 
            placeholder="输入内容"
            clazz="osg"
            style="color:red"
            :style="{marginTop:'30px'}"
            :autoComplete="true"
            :value="state.userName"
            @input="handleChange"
            @keyup="handleKeyup"
            @blur="handleBlur"
            @keyup.enter.native="handleKeyupEnter"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent,reactive,computed,watchEffect, onMounted } from 'vue'
import PcInput from '../components/PcInput.vue';
import dateFormat from 'jun-date-format';
export default defineComponent({
    components:{
        PcInput
    },
    setup (props,context) {
        const state = reactive({
            title:'todoList',
            userName:'',
            mycla:'age'
        })
        onMounted(()=>{
            console.log('--')
            let date = new Date();
            console.log(dateFormat.format('YYYY-MM-DD'))
            console.log(dateFormat.parse(new Date('2020/10/01 00:00:00'),date))
            console.log(dateFormat.parseDay(new Date('2020/10/01 00:00:00'),date))
            console.log(dateFormat.setDate())
            console.log(dateFormat.getMonthLength(date.getFullYear(),date.getMonth()))
        })
        // stop => function
        const stop = watchEffect(()=>{
            console.log('--watch--',state.userName)
        })
        const handleChange = (e)=>{
            state.userName = e.target.value;
        }
        const handleBlur = (e)=>{
            console.log(e)
        }
        const handleKeyup = (e)=>{
            if(e.keyCode == 13){

            }
        }
        const handleKeyupEnter = e=>{
            console.log(e)
        }
        return {
            state,
            handleChange,
            handleKeyup,
            handleBlur,
            handleKeyupEnter
        }
    }
})
</script>

<style scoped>

</style>