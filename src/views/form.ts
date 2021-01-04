import { computed, reactive, toRefs, ref, watch } from 'vue';
import { useStore } from 'vuex'

interface State{
    fName:String
}

function formVal(){
    let state:State;
    const store = useStore();
    state = reactive({
        // fName:store.getters.userName
        fName:computed(()=> store.getters.userName) // 响应式变更
    })

    const handleSetName = (e:any)=>{
        // state.fName = e.target.value
        store.commit('setUserName',e.target.value)
    }
    

    return {
        ...toRefs(state),
        handleSetName
    }

}

export default formVal
