import { reactive, computed, toRefs} from 'vue'
import {mapState} from 'vuex'

function todoList(){
    // 通过reactive 可以初始化一个可响应的数据，与Vue2.0中的Vue.observer很相似
    const state = reactive({
        todoList: [{
          id: 1,
          done: false,
          text: '吃饭'
        },{
          id: 2,
          done: false,
          text: '睡觉'
        },{
          id: 3,
          done: false,
          text: '打豆豆'
        }],
        todo: '',
        userName: computed(()=> mapState(['userName']))
    })
    
    // 使用计算属性生成待办列表
    const todos = computed(() => {
        return state.todoList.filter(item => !item.done)
    })

    // 使用计算属性生成已办列表
    const dones = computed(() => {
        return state.todoList.filter(item => item.done)
    })

    // 修改待办状态
    const handleChangeStatus = (item ,status) => {
        item.done = status
    }
    
    // 新增待办
    const handleAddTodo = () => {
        if(!state.todo) {
            alert('请输入待办事项')
            return
        }
        state.todoList.push({
            text: state.todo,
            id: Date.now(),
            done: false
        })
        state.todo = ''
    }
    return {
        ...toRefs(state),
        todos,
        dones,
        handleChangeStatus,
        handleAddTodo
      }
}

export default todoList