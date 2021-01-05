<template>
  <div class="todo-list">
    <div>
      
      <label>待办事项</label>
       <input v-model="todo" placeholder="输入待办事项" @keyup.enter="handleAddTodo">

       <PcInput
        :value="todo"
        placeholder="自定义input组件"
        @onInput="handleInput"
        @onKeyup="handleKeyup"
        ref="myInput"
        style="margin:20px auto"
       >
        <template v-slot:prepend><span>前缀</span></template>
        <template v-slot:append><span>后缀</span></template>
       </PcInput>

       <PcForm fvalue="3535" style="margin:20px auto">
         <PcFormItem label="自定义form表单：异步提交">
           <PcInput
            :value="fName"
            placeholder="自定义form表单" 
            @onInput="handleSetName"
            ref="myFormInput"
           />
         </PcFormItem>
       </PcForm>

       <button @click="handleAddTodo">新增待办</button>
    </div>
    <div>
        <h3>名称：{{userName}}</h3>
        <h3>待办列表({{todos.length}})</h3>
      <ul>
        <li v-for="item in todos" :key="item.id" @click="handleChangeStatus(item, true)">
          <input type="checkbox">
          <label>{{item.text}}</label>
        </li>
      </ul>
    </div>
    <div><h3>已办列表({{dones.length}})</h3></div>
    <ul>
      <li v-for="item in dones" :key="item.id" @click="handleChangeStatus(item, false)">
          <input type="checkbox" checked>
          <label>{{item.text}}</label>
        </li>
    </ul>
  </div>
</template>
<script lang="ts">
 // 在vue2中 data 在vue3中使用 reactive代替
import { defineComponent,reactive, computed,Component, ref } from 'vue'
import { useRouter } from 'vue-router'
import {mapState} from 'vuex'

import useTodoList from './useTodoList'
import useForm from './useForm'

import PcForm from '../components/PcForm.vue'
import PcFormItem from '../components/PcFormItem.vue'
import PcInput from '../components/PcInput.vue'

export default defineComponent({
  components:{
    PcForm,
    PcFormItem,
    PcInput
  },
  // setup相当于vue2.0的 beforeCreate和 created，是vue3新增的一个属性，所有的操作都在此属性中完成
  setup(props, context) {

    let {
        todo,
        userName,
        todos,
        dones,
        handleChangeStatus,
        handleAddTodo,
        handleInput
      } = useTodoList();

    const {fName,handleSetName} = useForm()
    

    const handleKeyup = (e) => {
      // console.log(e.keyCode)
    }
    // 在Vue3.0中，所有的数据和方法都通过在setup 中 return 出去，然后在template中使用
    return {
      todo,
      userName,
      todos,
      dones,
      handleChangeStatus,
      handleAddTodo,
      handleInput,
      handleKeyup,

      fName,
      handleSetName
    }
  }
})
</script>
<style scoped>
.todo-list{
  text-align: center;
}

.todo-list ul li {
  list-style: none;
}
</style>