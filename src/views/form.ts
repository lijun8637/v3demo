import { computed, reactive, toRefs } from 'vue';
import { useStore } from 'vuex'

interface State{
    fName:String
}

function formVal(){
    let state:State;
    const store = useStore();
    state = reactive({
        fName:computed(()=> store.state.userName)
    })

    return {
        ...toRefs(state)
    }

}

export default formVal
