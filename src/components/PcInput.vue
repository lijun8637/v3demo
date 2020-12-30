<template>
    <div>
        <slot></slot>
        <span>{{value}}</span>
        <input 
            :value="value"
            :type="type"
            :placeholder="placeholder" 
            :auto-Complete="autoComplete"
            :maxlength="maxlength"
            :class="clazz"
            :style="style"
            @input="onInput"
            @keyup="onKeyup"
            @blur="onBlur" 
        >
    </div>
</template>

<script lang="ts">
import { defineComponent,reactive,computed, onMounted, watch, watchEffect } from 'vue'

export default defineComponent({
    name:'input',
    props:{
        value:{
            type:String,
            default:''
        },
        placeholder:{
            type:String,
            default:''
        },
        class:String,
        clazz:[String,Object],
        // style:undefined ,
        style:{
            type:Object,
            default:{}
        },
        type:{
            type:String,
            default:'text'
        },
        autoComplete:{
            type:Boolean,
            default:false
        },
        maxlength:Number
    },
    setup (props,{emit}) {
        const state = reactive({
            
        })
        onMounted(()=>{
            // state.clas = props.clazz + ' ';
            // console.log(JSON.parse(JSON.stringify(props)))
            // if(props.myClass){
            //     for (let k in props.myClass) {
            //         if (props.myClass[k]) {
            //             state.clas += k + ' ';
            //         }
            //     }
            // }
        })
        // const value = computed(()=>props.value);
        const onInput = (e)=>{
            emit('input',e)
        }
        const onKeyup = (e)=>{
            emit('keyup',e)
        }
        const onBlur = (e:any)=>{
            emit('blur',e)
        }
        // watch(()=>props.value,(val)=>{
        //     console.log(val)
        // })
        // watchEffect(()=>{
        //     console.log(props)
        // })

        return {
            state,
            // value,
            onInput,
            onKeyup,
            onBlur,
        }
    }
})
</script>

<style scoped>

</style>