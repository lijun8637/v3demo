// 在vue2中 data 在vue3中使用 reactive代替
import { reactive, computed, toRefs, onMounted, ref} from 'vue'
import {mapState, mapMutations, useStore} from 'vuex'

interface State {
    todoList:Array<any>,
    userName:any,
    todo:string
}

function todoList(){
    // 通过reactive 可以初始化一个可响应的数据，与Vue2.0中的Vue.observer很相似
    let state:State;
    const store = useStore();
    state = reactive({
        // todoList: computed(()=> store.state.todoList),
        todoList: computed(()=> store.getters.todoList),
        // todoList: computed(()=> mapState(['todoList']),
        todo: '',
        userName: computed(()=> store.state.userName)
    })

    onMounted(()=>{
        
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
    const handleChangeStatus = (item:any ,status:boolean) => {
        item.done = status
    }
    
    // 新增待办
    const handleAddTodo = () => {
        if(!state.todo) {
            alert('请输入待办事项')
            return
        }
        let arr = [...state.todoList]
        arr.push({
            text: state.todo,
            id: Date.now(),
            done: false
        })
        state.todo = '';
        store.commit('setTodoList',arr);
    }
    //子组件传递参数
    const handleInput = (e:any)=>{
        state.todo = e.target.value
    }
    return {
        // 使数据具备响应式
        ...toRefs(state),
        todos,
        dones,
        handleChangeStatus,
        handleAddTodo,
        handleInput
      }
}

export default todoList