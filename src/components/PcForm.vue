<template>
    <form>
        <slot></slot>
    </form>
</template>

<script lang="ts">
import { defineComponent,provide } from 'vue'

import PcInput from './PcInput.vue'

export default defineComponent({
    components:{ PcInput },
    props:{
        fvalue:{
            type:String,
            defualt:''
        }
    },
    setup (props) {
        
        provide('fvalue',props.fvalue)

        return {}
    }
})
</script>

<style scoped>

</style>