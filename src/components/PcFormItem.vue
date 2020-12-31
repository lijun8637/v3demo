<template>
    <div>
        <span>{{label}}</span>
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent, inject, onMounted, ref } from 'vue'

export default defineComponent({
    props:{
        label:{
            type:String,
            default:''
        }
    },
    setup () {
        
        const fval = inject<any>('fvalue')

        onMounted(()=>{
            console.log(fval)
        })
        
        return {}
    }
})
</script>

<style scoped>

</style>