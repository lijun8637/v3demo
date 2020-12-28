import {createStore} from 'vuex'

interface State{
    userName:string
}

export default createStore({
    state():State{
        return {
            userName:'3456sdtg'
        }
    },
    
})