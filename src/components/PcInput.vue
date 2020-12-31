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
import { defineComponent,reactive,computed, onMounted, watch, watchEffect, ref, inject } from 'vue'

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

        // 向后代发放数据
        // provide(modelKey, props.model)
        // provide(rulesKey, props.rules)

        // 接受ValidateForm传下来的数据
        // const model = inject<any>(modelKey, ref({}))
        // const rules = inject<any>(rulesKey, ref({}))

        const state = reactive({
            
        })

        const fval = inject<any>('fvalue')


        onMounted(()=>{
            console.log(fval)
        })
        
        const valueRef = ref('')
    
        // 该函数可以接受父级传递一个参数，并修改valueRef的值
        const acceptValue = (value: string) => (valueRef.value = value)

        /** 父组件：
            // 如果ref初始值是一个空，可以用于接受一个实例
            // vue3中获取实例的方式和vue2略有不同
            const sonRef = ref()

            const sendValue = () => {
                // 可以拿到son组件实例，并调用其setup返回的所有信息
                console.log(sonRef.value)
                
                // 通过调用son组件实例的方法，向其传递数据
                sonRef.value.acceptValue('123456')
            }
         */
        

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