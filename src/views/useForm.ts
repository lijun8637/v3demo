import { computed, reactive, toRefs, ref, watch } from 'vue';
import { useStore } from 'vuex'

interface State{
    fName:String
}

function  ajax(params:string) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(params)
        },2000)
    })
}

function formVal(){
    let state:State;
    const store = useStore();
    state = reactive({
        // fName:store.getters.userName
        fName:computed(()=> store.getters.userName) // 响应式变更
    })

    const handleSetName = async (e:any)=>{
        // state.fName = e.target.value
        // store.commit('setUserName',e.target.value)
        let userName = await ajax(e.target.value)
        store.commit('setUserName',userName)
    }
    

    return {
        ...toRefs(state),
        handleSetName
    }

}

export default formVal
