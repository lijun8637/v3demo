<template>
  <div class="todo-list">
    <div>
      <label>待办事项</label>
       <input v-model="todo" placeholder="输入待办事项" @keyup.enter="handleAddTodo">

       <pc-input 
        :value="todo"
        placeholder="自定义组件"
        @input="handleInput"
        @keyup="handleKeyup"
       />

       <button @click="handleAddTodo">新增待办</button>
    </div>
    <div>
        <h3>{{userName}}</h3>
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

import todoList from './todoList'

import PcInput from '../components/PcInput.vue'

export default defineComponent({
  components:{
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
      } = todoList();

    
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
      handleKeyup
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