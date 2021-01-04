import {createStore} from 'vuex'

interface State{
    userName:string,
    todoList:Array<Object>,
}

export default createStore({
    modules:{},
    state():State{
        return {
            userName:'3456sdtg',
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
        }
    },
    getters:{
        todoList: state => state.todoList,
        userName: state => state.userName
    },
    mutations:{
        setTodoList:(state:any,payload:Array<object>):void => {
            state.todoList = payload
        },
        setUserName:(state:any,payload:string):void =>{
            state.userName = payload
        }
    },
    actions:{

    }
})