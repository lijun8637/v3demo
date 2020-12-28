<template>
    <div>
        <slot></slot>
        <span>{{value}}</span>
        <input 
            :type="props.type"
            :value="props.value"
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
import { defineComponent,reactive,computed, onMounted } from 'vue'

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
        style:undefined ,
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
            value:'',
            clas:'',
        })
        onMounted(()=>{
            // state.clas = props.clazz + ' ';
            console.log(props.clazz)
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
        const onBlur = (e)=>{
            emit('blur',e)
        }

        return {
            props,
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